"use client";

import { useProject } from "@/contexts/ProjectContext";
import Image from "next/image";
import { Network } from "lucide-react";

export default function ProjectArchitecture() {
  const project = useProject();

  if (!project.architecture) return null;

  return (
    <section
      className="
        flex w-full min-w-section-minw-xs flex-col
        gap-[clamp(18px,4vmin,40px)]
        s:min-w-section-minw-s
        m:min-w-section-minw-m
        l:min-w-section-minw-l
      "
    >
      <div
        className="
          flex w-full flex-col gap-[clamp(12px,2vmin,18px)]
          l:flex-row l:items-end l:justify-between
        "
      >
        <div className="flex max-w-[680px] flex-col gap-[clamp(8px,1.5vmin,12px)]">
          <p
            className="
              font-jetbrains uppercase text-secondary-lightest/60
              text-[clamp(10px,1.2vmin,12px)]
              leading-none
            "
          >
            system_map
          </p>

          <h1 className="project-page-section">System Architecture</h1>
        </div>

        <p
          className="
            max-w-[420px] font-outfit text-secondary-lightest/70
            text-[clamp(13px,1.6vmin,16px)]
            leading-[1.45]
            l:text-right
          "
        >
          A high-level view of how the application&apos;s frontend, backend,
          data, and external services connect.
        </p>
      </div>

      <figure
        className="
          overflow-hidden rounded-[16px]
          border border-accent-light/20 bg-white/[0.03]
          p-[clamp(8px,1.5vmin,14px)]
        "
      >
        <div
          className="
            relative w-full overflow-hidden rounded-[10px]
            border border-accent-light/10 bg-primary-light
            aspect-[16/9]
          "
        >
          <Image
            src={project.architecture.src}
            alt={project.architecture.alt}
            fill
            sizes="
              (min-width: 1200px) 1100px,
              (min-width: 992px) 900px,
              (min-width: 768px) 720px,
              100vw
            "
            className="
              object-contain
              p-[clamp(10px,2vmin,24px)]
            "
          />
        </div>

        <figcaption
          className="
            border-t border-accent-light/10
            px-[clamp(6px,1vmin,10px)]
            pt-[clamp(10px,2vmin,14px)]
            font-jetbrains uppercase text-secondary-lightest/45
            text-[clamp(10px,1.2vmin,12px)]
            leading-[1.4]
          "
        >
          Architecture diagram for {project.title}
        </figcaption>
      </figure>
    </section>
  );
}