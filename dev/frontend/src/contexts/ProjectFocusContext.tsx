"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type ProjectFocusContextValue = {
  activeId: string | null;
  registerBlock: (id: string, element: HTMLDivElement) => void;
  unregisterBlock: (id: string) => void;
};

const ProjectFocusContext = createContext<ProjectFocusContextValue | null>(null);

type ProjectFocusProviderProps = {
  children: ReactNode;
};

export function ProjectFocusProvider({ children }: ProjectFocusProviderProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementToIdRef = useRef(new Map<Element, string>());
  const orderRef = useRef<string[]>([]);

  const [activeId, setActiveId] = useState<string | null>(null);

  // A thin band around the vertical center of the viewport. Whichever
  // section is crossing that band is the "active" one. This lets the
  // browser do all the work — it fires automatically on scroll, resize,
  // and once layout settles after navigation — instead of us manually
  // polling with timeouts/rAF.
  const getObserver = useCallback(() => {
    if (observerRef.current || typeof IntersectionObserver === "undefined") {
      return observerRef.current;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);

        if (intersecting.length === 0) return;

        // If more than one happens to overlap the band, pick whichever
        // is closest to the exact viewport center.
        const viewportCenter = window.innerHeight / 2;

        let closestId: string | null = null;
        let closestDistance = Number.POSITIVE_INFINITY;

        intersecting.forEach((entry) => {
          const id = elementToIdRef.current.get(entry.target);
          if (!id) return;

          const rect = entry.boundingClientRect;
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        });

        if (closestId) {
          setActiveId(closestId);
        }
      },
      {
        // Shrinks the observed viewport to a thin horizontal band at
        // the vertical center (roughly the middle 6%).
        rootMargin: "-47% 0px -47% 0px",
        threshold: 0,
      }
    );

    return observerRef.current;
  }, []);

  const registerBlock = useCallback(
    (id: string, element: HTMLDivElement) => {
      elementToIdRef.current.set(element, id);

      if (!orderRef.current.includes(id)) {
        orderRef.current.push(id);
      }

      // Fallback so something is highlighted immediately, before the
      // observer's first callback fires.
      setActiveId((current) => current ?? orderRef.current[0] ?? null);

      getObserver()?.observe(element);
    },
    [getObserver]
  );

  const unregisterBlock = useCallback((id: string) => {
    let elementToRemove: Element | null = null;

    elementToIdRef.current.forEach((mappedId, element) => {
      if (mappedId === id) {
        elementToRemove = element;
      }
    });

    if (elementToRemove) {
      observerRef.current?.unobserve(elementToRemove);
      elementToIdRef.current.delete(elementToRemove);
    }

    orderRef.current = orderRef.current.filter((blockId) => blockId !== id);
  }, []);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      elementToIdRef.current.clear();
    };
  }, []);

  return (
    <ProjectFocusContext.Provider
      value={{
        activeId,
        registerBlock,
        unregisterBlock,
      }}
    >
      {children}
    </ProjectFocusContext.Provider>
  );
}

export function useProjectFocus() {
  const context = useContext(ProjectFocusContext);

  if (!context) {
    throw new Error("useProjectFocus must be used inside ProjectFocusProvider");
  }

  return context;
}