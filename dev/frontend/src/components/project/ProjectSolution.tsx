"use client";

import { useProject } from "@/contexts/ProjectContext";

export default function ProjectSolution() {
  const project = useProject();

  return (
    <section
      className="
        grid w-full min-w-section-minw-xs grid-cols-1
        gap-[clamp(18px,4vmin,40px)]
        s:min-w-section-minw-s
        m:min-w-section-minw-m
        l:min-w-section-minw-l
        l:grid-cols-[clamp(160px,18vw,240px)_minmax(0,1fr)]
      "
    >
      <div className="flex flex-col gap-[clamp(8px,1.5vmin,12px)]">
        <p
          className="
            font-jetbrains uppercase text-secondary-lightest/50
            text-[clamp(11px,1.3vmin,13px)]
            leading-none
          "
        >
          03 / solution
        </p>

        <h1 className="project-page-section">Built Solution</h1>
      </div>

      <div
        className="
          rounded-[12px] border border-green-500/20 bg-green-500/[0.04]
          p-[clamp(16px,3vmin,28px)]
        "
      >
        <p className="project-paragraph max-w-[900px]">
          {project.solution}
        </p>
      </div>
    </section>
  );
}