"use client";

import { useProject } from "@/contexts/ProjectContext";

export default function ProjectHighlight() {
  const project = useProject();

  return (
    <section
      className="
        w-full min-w-section-minw-xs
        s:min-w-section-minw-s
        m:min-w-section-minw-m
        l:min-w-section-minw-l
      "
    >
      <div
        className="
          relative overflow-hidden rounded-[16px]
          border border-secondary-lighter/20
          bg-secondary-lighter/[0.04]
          p-[clamp(18px,4vmin,40px)]
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute right-[-20%] top-[-60%]
            h-[clamp(180px,30vmin,360px)]
            w-[clamp(180px,30vmin,360px)]
            rounded-full bg-secondary-lighter/10 blur-[80px]
          "
        />

        <div
          className="
            relative z-10 flex w-full flex-col
            gap-[clamp(18px,3vmin,32px)]
            l:flex-row l:items-start l:justify-between
          "
        >
          <div
            className="
              flex max-w-[420px] flex-col
              gap-[clamp(10px,2vmin,16px)]
            "
          >
            <div className="flex flex-col gap-[clamp(6px,1vmin,10px)]">
              <p
                className="
                  font-jetbrains uppercase text-secondary-lightest/60
                  text-[clamp(11px,1.3vmin,13px)]
                  leading-none
                "
              >
                technical_highlight
              </p>

              <h1 className="project-page-section">
                What Makes This Build Strong
              </h1>
            </div>
          </div>

          <div
            className="
              max-w-[720px] border-l border-accent-light/15
              pl-[clamp(16px,3vmin,32px)]
            "
          >
            <p className="project-paragraph">
              {project.highlights}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}