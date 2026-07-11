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

const EXPAND_DELAY_MS = 100;
const COLLAPSE_DELAY_MS = 500;

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const phantomRef = useRef<HTMLElement | null>(null);

  const activationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isAutoActivationLocked, setIsAutoActivationLocked] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const [previewPosition, setPreviewPosition] = useState({
    left: 0,
    width: 250,
  });

  const getProjectHref = useCallback((project: Project) => {
    return `/${slugify(project.title)}`;
  }, []);

  const activeProjectItem = useMemo(() => {
    if (!activeProject) return null;

    return projects.find((project) => project.title === activeProject) ?? null;
  }, [activeProject, projects]);

  const activateProjectAfterScroll = useCallback(
    (projectTitle: string, getTargetScrollY: () => number | null) => {
      setIsAutoActivationLocked(true);

      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }

      if (activationTimerRef.current) {
        clearTimeout(activationTimerRef.current);
      }

      const shouldCollapseCurrentProject =
        activeProject !== null && activeProject !== projectTitle;

      if (shouldCollapseCurrentProject) {
        setActiveProject(null);
      }

      collapseTimerRef.current = setTimeout(
        () => {
          requestAnimationFrame(() => {
            const targetScrollY = getTargetScrollY();

            if (targetScrollY === null) {
              setIsAutoActivationLocked(false);
              return;
            }

            window.scrollTo({
              top: Math.max(0, targetScrollY),
              behavior: "smooth",
            });

            activationTimerRef.current = setTimeout(() => {
              setActiveProject(projectTitle);
              setIsAutoActivationLocked(false);
            }, EXPAND_DELAY_MS);
          });
        },
        shouldCollapseCurrentProject ? COLLAPSE_DELAY_MS : 0
      );
    },
    [activeProject]
  );

  useEffect(() => {
    return () => {
      if (activationTimerRef.current) {
        clearTimeout(activationTimerRef.current);
      }

      if (collapseTimerRef.current) {
        clearTimeout(collapseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updatePreview = () => {
      if (!contentRef.current || !phantomRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const phantomRect = phantomRef.current.getBoundingClientRect();

      const screenMiddle = window.innerHeight / 2;
      const offset = -100;

      const isMiddleInsideContent =
        contentRect.top <= screenMiddle - offset &&
        contentRect.bottom >= screenMiddle + offset;

      setIsPreviewVisible(isMiddleInsideContent);

      setPreviewPosition({
        left: phantomRect.left,
        width: phantomRect.width,
      });
    };

    updatePreview();

    window.addEventListener("scroll", updatePreview);
    window.addEventListener("resize", updatePreview);

    return () => {
      window.removeEventListener("scroll", updatePreview);
      window.removeEventListener("resize", updatePreview);
    };
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
            -translate-y-1/2 transition-all duration-500 ease-out
            m:block
            ${
              isPreviewVisible
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
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
              {activeProjectItem.date.toLocaleDateString("en-CA", {
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
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
          </Link>
        </aside>
      )}
    </>
  );
}