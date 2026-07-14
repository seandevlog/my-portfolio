"use client";

import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import type ProjectType from "@/types/project";

type ProjectItemProps = {
  project: ProjectType;
  projectHref: string;
  isActive: boolean;
  setActiveProject: Dispatch<SetStateAction<string | null>>;
  isAutoActivationLocked: boolean;
  activateProjectAfterScroll: (
    projectTitle: string,
    getTargetScrollY: () => number | null
  ) => void;
};

export default function ProjectItem({
  project,
  projectHref,
  isActive,
  setActiveProject,
  isAutoActivationLocked,
  activateProjectAfterScroll,
}: ProjectItemProps) {
  const router = useRouter();

  const itemRef = useRef<HTMLDivElement | null>(null);
  const contentInnerRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const [sizes, setSizes] = useState({
    stack: 0,
    title: 0,
    description: 0,
    gap: 5,
  });

  useLayoutEffect(() => {
    const updateSizes = () => {
      const computedGap = contentInnerRef.current
        ? parseFloat(window.getComputedStyle(contentInnerRef.current).rowGap)
        : 5;

      setSizes({
        stack: stackRef.current?.offsetHeight ?? 0,
        title: titleRef.current?.offsetHeight ?? 0,
        description: descriptionRef.current?.offsetHeight ?? 0,
        gap: Number.isNaN(computedGap) ? 5 : computedGap,
      });
    };

    updateSizes();

    const resizeObserver = new ResizeObserver(updateSizes);

    if (contentInnerRef.current) resizeObserver.observe(contentInnerRef.current);
    if (stackRef.current) resizeObserver.observe(stackRef.current);
    if (titleRef.current) resizeObserver.observe(titleRef.current);
    if (descriptionRef.current) resizeObserver.observe(descriptionRef.current);

    window.addEventListener("resize", updateSizes);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSizes);
    };
  }, [project]);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAutoActivationLocked) {
          setActiveProject(project.title);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, [project.title, setActiveProject, isAutoActivationLocked]);

  useLayoutEffect(() => {
    if (!itemRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !isAutoActivationLocked &&
          isActive &&
          entry.intersectionRatio < 0.08
        ) {
          setActiveProject((current) =>
            current === project.title ? null : current
          );
        }
      },
      {
        root: null,
        threshold: [0, 0.08, 0.15, 0.25],
      }
    );

    observer.observe(itemRef.current);

    return () => observer.disconnect();
  }, [isActive, project.title, setActiveProject, isAutoActivationLocked]);

  const scrollProjectToCenter = () => {
    if (!itemRef.current || isActive) return;

    activateProjectAfterScroll(project.title, () => {
      if (!itemRef.current) return null;

      const itemTop =
        itemRef.current.getBoundingClientRect().top + window.scrollY;

      return itemTop - window.innerHeight * 0.55;
    });
  };

  const openProjectPage = () => {
    router.push(projectHref);
  };

  const handleClick = () => {
    if (isActive) {
      openProjectPage();
      return;
    }

    scrollProjectToCenter();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();

    if (isActive) {
      openProjectPage();
      return;
    }

    scrollProjectToCenter();
  };

  const isMeasured = sizes.title > 0;

  const collapsedHeight = sizes.title;
  const expandedHeight =
    sizes.stack + sizes.title + sizes.description + sizes.gap * 2;

  return (
    <div
      ref={itemRef}
      role={isActive ? "link" : "button"}
      aria-label={
        isActive
          ? `Open ${project.title} project page`
          : `Preview ${project.title}`
      }
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        height: isMeasured
          ? isActive
            ? expandedHeight
            : collapsedHeight
          : "auto",
      }}
      className={`
        relative w-full overflow-hidden transition-[height] duration-700 ease-out
        cursor-pointer
        focus-visible:outline-1 focus-visible:outline-secondary-lighter
      `}
    >
      <div
        ref={contentInnerRef}
        style={{
          transform:
            isMeasured && !isActive
              ? `translateY(-${sizes.stack + sizes.gap}px)`
              : "translateY(0px)",
        }}
        className="
          flex w-full flex-col items-start
          gap-[clamp(4px,0.8vmin,6px)]
          transition-transform duration-700 ease-out
        "
      >
        <span
          ref={stackRef}
          className={`
            w-fit font-jetbrains uppercase text-secondary-lightest
            text-[clamp(11px,1.35vmin,16px)]
            leading-[1.2]
            transition-opacity duration-700 ease-out
            ${isActive ? "opacity-70" : "opacity-0"}
          `}
        >
          {project.stack.slice(0, 5).join(" | ")}
        </span>

        <h3
          ref={titleRef}
          className="
            w-fit text-left font-semibold text-accent-light
            text-[clamp(16px,3.2vmin,30px)]
            leading-[1.1]
          "
        >
          {project.title}
        </h3>

        <p
          ref={descriptionRef}
          className={`
            w-full text-left text-secondary-lightest
            text-[clamp(14px,2vmin,22px)]
            leading-[1.4]
            transition-opacity duration-700 ease-out
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        >
          {project.description.short}
        </p>
      </div>
    </div>
  );
}