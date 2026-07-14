"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type Project from "@/types/project";
import ProjectsList from "../ui/ProjectsList";
import { slugify } from "@/utils/slugify";

type ProjectsShowcaseProps = {
  projects: Project[];
};

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const phantomRef = useRef<HTMLElement | null>(null);

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isAutoActivationLocked, setIsAutoActivationLocked] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const [previewPosition, setPreviewPosition] = useState({
    left: 0,
    width: 250,
  });

  const projectsByTitle = useMemo(() => {
    return new Map(projects.map((project) => [project.title, project]));
  }, [projects]);

  const activeProjectItem = activeProject
    ? projectsByTitle.get(activeProject) ?? null
    : null;

  const getProjectHref = useCallback((project: Project) => {
    return `/${slugify(project.title)}`;
  }, []);

  const updatePreviewPosition = useCallback(() => {
    if (!phantomRef.current) return;

    const phantomRect = phantomRef.current.getBoundingClientRect();

    const nextPosition = {
      left: Math.round(phantomRect.left),
      width: Math.round(phantomRect.width),
    };

    setPreviewPosition((currentPosition) => {
      const isSamePosition =
        currentPosition.left === nextPosition.left &&
        currentPosition.width === nextPosition.width;

      return isSamePosition ? currentPosition : nextPosition;
    });
  }, []);

  // Stable identity — reads current activeProject via the functional
  // updater instead of depending on it, so this never changes
  // between renders.
  const activateProjectAfterScroll = useCallback(
    (projectTitle: string, getTargetScrollY: () => number | null) => {
      setIsAutoActivationLocked(true);

      setActiveProject((current) =>
        current === projectTitle ? current : null
      );

      requestAnimationFrame(() => {
        const targetScrollY = getTargetScrollY();

        if (targetScrollY !== null) {
          window.scrollTo({
            top: Math.max(0, targetScrollY),
            behavior: "smooth",
          });
        }

        setActiveProject(projectTitle);

        requestAnimationFrame(() => {
          setIsAutoActivationLocked(false);
        });
      });
    },
    []
  );

  useEffect(() => {
    updatePreviewPosition();

    // Covers window resize too: phantomRef's width is viewport-driven
    // CSS (clamp/vw), so no separate resize listener is needed.
    const resizeObserver = new ResizeObserver(updatePreviewPosition);

    if (phantomRef.current) {
      resizeObserver.observe(phantomRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [updatePreviewPosition]);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPreviewVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      }
    );

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={contentRef}
        className="
          grid w-full
          gap-[clamp(28px,4vmin,40px)]
          m:grid-cols-[minmax(0,1fr)_clamp(220px,28vw,260px)]
          l:grid-cols-[minmax(0,1fr)_clamp(250px,28vw,300px)]
          xl:grid-cols-[minmax(0,1fr)_clamp(300px,28vw,340px)]
        "
      >
        <ProjectsList
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          isAutoActivationLocked={isAutoActivationLocked}
          activateProjectAfterScroll={activateProjectAfterScroll}
          getProjectHref={getProjectHref}
        />

        <aside
          ref={phantomRef}
          aria-hidden="true"
          className="
            hidden h-full shrink-0
            w-[clamp(220px,28vw,260px)]
            m:block
            l:w-[clamp(250px,28vw,300px)]
            xl:w-[clamp(300px,28vw,340px)]
          "
        />
      </div>

      {activeProjectItem && (
        <aside
          style={{
            left: previewPosition.left,
            width: previewPosition.width,
          }}
          className={`
            pointer-events-none fixed top-1/2 z-30 hidden
            -translate-y-1/2 transition-[opacity,transform] duration-300 ease-out
            will-change-[opacity,transform]
            m:block
            ${
              isPreviewVisible
                ? "scale-100 opacity-100"
                : "scale-[0.98] opacity-0"
            }
          `}
        >
          <Link
            href={getProjectHref(activeProjectItem)}
            aria-label={`Open ${activeProjectItem.title} project page`}
            className="
              pointer-events-auto flex w-full flex-col
              gap-[clamp(8px,1.5vmin,10px)]
              rounded-[8px]
              transition-opacity duration-300 ease-out
              hover:opacity-90
              focus-visible:outline-1 focus-visible:outline-secondary-lighter
            "
          >
            <p
              className="
                font-jetbrains uppercase text-secondary-lightest/70
                text-[clamp(11px,1.3vmin,12px)]
              "
            >
              {new Date(activeProjectItem.date).toLocaleDateString("en-CA", {
                month: "2-digit",
                year: "numeric",
              })}
            </p>

            <div
              className="
                relative w-full overflow-hidden rounded-[8px]
                border border-accent-light/20 bg-primary-light
                h-[clamp(160px,24vmin,180px)]
                l:h-[clamp(180px,24vmin,220px)]
                xl:h-[clamp(220px,24vmin,260px)]
              "
            >
              <Image
                src={activeProjectItem.screenshots[0].coverImage.src}
                alt={activeProjectItem.screenshots[0].coverImage.alt}
                fill
                sizes={`${previewPosition.width}px`}
                className="
                  object-cover transition-transform duration-500 ease-out
                  hover:scale-105
                "
              />
            </div>
          </Link>
        </aside>
      )}
    </>
  );
}