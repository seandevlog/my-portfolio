"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type Project from "@/types/projects";
import ProjectsSection from "../ui/ProjectsSection";

type ProjectsShowcaseProps = {
  projects: Project[];
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const phantomRef = useRef<HTMLElement | null>(null);

  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const [previewPosition, setPreviewPosition] = useState({
    left: 0,
    width: 250,
  });

  const activeProjectItem = useMemo(() => {
    return (
      projects.find((project) => project.title === activeProject) ?? projects[0]
    );
  }, [activeProject, projects]);

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
        className="grid w-full gap-[40px] m:grid-cols-[minmax(0,1fr)_220px] l:grid-cols-[minmax(0,1fr)_250px]"
      >
        <ProjectsSection
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />

        {/* One phantom column only */}
        <aside
          ref={phantomRef}
          aria-hidden="true"
          className="hidden h-full w-[220px] shrink-0 m:block l:w-[250px]"
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
            -translate-y-1/2 flex-col gap-[10px]
            transition-all duration-500 ease-out
            m:flex
            ${
              isPreviewVisible
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }
          `}
        >
          <p className="font-jetbrains text-[12px] uppercase text-secondary-lightest/70">
            {activeProjectItem.date.toLocaleDateString("en-CA", {
              month: "2-digit",
              year: "numeric",
            })}
          </p>

          <div className="relative h-[180px] w-full overflow-hidden rounded-[8px] border border-accent-light/20 bg-primary-light l:h-[200px]">
            <Image
              src={activeProjectItem.screenshots[0].coverImage.src}
              alt={activeProjectItem.screenshots[0].coverImage.alt}
              fill
              sizes={`${previewPosition.width}px`}
              className="object-cover"
            />
          </div>
        </aside>
      )}
    </>
  );
}