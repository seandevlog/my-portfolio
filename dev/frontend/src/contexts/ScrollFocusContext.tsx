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

type ScrollFocusContextValue = {
  activeId: string | null;
  registerBlock: (id: string, element: HTMLDivElement) => void;
  unregisterBlock: (id: string) => void;
};

const ScrollFocusContext = createContext<ScrollFocusContextValue | null>(null);

type ScrollFocusProviderProps = {
  children: ReactNode;
  rootMargin?: string;
};

export function ScrollFocusProvider({
  children,
  rootMargin = "-47% 0px -47% 0px",
}: ScrollFocusProviderProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementToIdRef = useRef(new Map<Element, string>());
  const orderRef = useRef<string[]>([]);

  const [activeId, setActiveId] = useState<string | null>(null);

  const getObserver = useCallback(() => {
    if (observerRef.current || typeof IntersectionObserver === "undefined") {
      return observerRef.current;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);

        if (intersecting.length === 0) return;

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
        rootMargin,
        threshold: 0,
      }
    );

    return observerRef.current;
  }, [rootMargin]);

  const registerBlock = useCallback(
    (id: string, element: HTMLDivElement) => {
      elementToIdRef.current.set(element, id);

      if (!orderRef.current.includes(id)) {
        orderRef.current.push(id);
      }

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

    setActiveId((current) => {
      if (current !== id) return current;
      return orderRef.current[0] ?? null;
    });
  }, []);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      elementToIdRef.current.clear();
      orderRef.current = [];
    };
  }, []);

  return (
    <ScrollFocusContext.Provider
      value={{
        activeId,
        registerBlock,
        unregisterBlock,
      }}
    >
      {children}
    </ScrollFocusContext.Provider>
  );
}

export function useScrollFocus() {
  const context = useContext(ScrollFocusContext);

  if (!context) {
    throw new Error("useScrollFocus must be used inside ScrollFocusProvider");
  }

  return context;
}