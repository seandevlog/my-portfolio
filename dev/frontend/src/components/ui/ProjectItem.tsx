"use client";

import {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type ProjectType from "@/types/projects";

const GAP = 5;

type ProjectItemProps = {
  project: ProjectType;
  isActive: boolean;
  setActiveProject: Dispatch<SetStateAction<string | null>>;
};

export default function ProjectItem({
  project,
  isActive,
  setActiveProject,
}: ProjectItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const [sizes, setSizes] = useState({
    stack: 0,
    title: 0,
    description: 0,
  });

  useLayoutEffect(() => {
    const updateSizes = () => {
      setSizes({
        stack: stackRef.current?.offsetHeight ?? 0,
        title: titleRef.current?.offsetHeight ?? 0,
        description: descriptionRef.current?.offsetHeight ?? 0,
      });
    };

    updateSizes();

    const resizeObserver = new ResizeObserver(updateSizes);

    if (stackRef.current) resizeObserver.observe(stackRef.current);
    if (titleRef.current) resizeObserver.observe(titleRef.current);
    if (descriptionRef.current) resizeObserver.observe(descriptionRef.current);

    return () => resizeObserver.disconnect();
  }, [project]);

  useLayoutEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
  }, [project.title, setActiveProject]);

  useLayoutEffect(() => {
    if (!itemRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        /**
         * Close only when the active item is almost gone,
         * not just because it left the center.
         */
        if (isActive && entry.intersectionRatio < 0.08) {
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
  }, [isActive, project.title, setActiveProject]);

  const scrollProjectToCenter = () => {
    if (!itemRef.current || isActive) return;

    const itemTop = itemRef.current.getBoundingClientRect().top + window.scrollY;

    /**
     * When expanded, the title sits below the stack.
     * So we scroll based on the title's expanded position,
     * not the collapsed position.
     */
    const expandedTitleCenter =
      itemTop + sizes.stack + GAP + sizes.title / 2;

    const targetScrollY = expandedTitleCenter - window.innerHeight / 2;

    setActiveProject(project.title);

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollProjectToCenter();
    }
  };

  const isMeasured = sizes.title > 0;

  const collapsedHeight = sizes.title;
  const expandedHeight = sizes.stack + sizes.title + sizes.description + GAP * 2;

  return (
    <div
      ref={itemRef}
      role="button"
      tabIndex={0}
      onClick={scrollProjectToCenter}
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
        ${isActive ? "cursor-default" : "cursor-pointer"}
      `}
    >
      <div
        style={{
          transform:
            isMeasured && !isActive
              ? `translateY(-${sizes.stack + GAP}px)`
              : "translateY(0px)",
        }}
        className="flex w-full flex-col items-start gap-[5px] transition-transform duration-700 ease-out"
      >
        <span
          ref={stackRef}
          className={`
            w-fit font-jetbrains text-p2-xs uppercase text-secondary-lightest
            transition-opacity duration-700 ease-out
            s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl
            ${isActive ? "opacity-70" : "opacity-0"}
          `}
        >
          {project.stack.slice(0, 5).join(" | ")}
        </span>

        <h3
          ref={titleRef}
          className="w-fit text-left text-h3-xs font-semibold text-accent-light s:text-h3-s m:text-h3-m l:text-h3-l"
        >
          {project.title}
        </h3>

        <p
          ref={descriptionRef}
          className={`
            w-full text-left text-p1-xs text-secondary-lightest
            transition-opacity duration-700 ease-out
            s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl
            ${isActive ? "opacity-100" : "opacity-0"}
          `}
        >
          {project.description.short}
        </p>
      </div>
    </div>
  );
}