"use client";

import { useProject } from "@/contexts/ProjectContext";

export default function ProjectFeatures() {
  const project = useProject();

  return (
    <section
      className="
        flex w-full min-w-section-minw-xs flex-col items-start
        gap-[clamp(16px,3vmin,32px)]
        s:min-w-section-minw-s
        m:min-w-section-minw-m
        l:min-w-section-minw-l
      "
    >
      <div className="flex w-full flex-col gap-[clamp(6px,1vmin,10px)]">
        <p
          className="
            font-jetbrains uppercase text-secondary-lightest/60
            text-[clamp(11px,1.3vmin,13px)]
          "
        >
          product_capabilities
        </p>

        <h1 className="project-page-section">Core Features</h1>
      </div>

      <ol
        className="
          grid w-full grid-cols-1
          gap-[clamp(10px,2vmin,16px)]
          m:grid-cols-2
        "
      >
        {project.features.map((feature, index) => (
          <li
            key={feature}
            className="
              group flex w-full gap-[clamp(12px,2vmin,18px)]
              rounded-[10px] border border-accent-light/15 bg-white/[0.03]
              p-[clamp(14px,2.4vmin,22px)]
              transition-all duration-300 ease-out
              hover:border-accent-light/30 hover:bg-white/[0.06]
            "
          >
            <span
              className="
                flex size-[clamp(28px,4vmin,38px)] shrink-0 items-center justify-center
                rounded-[6px] border border-accent-light/20 bg-primary-light
                font-jetbrains text-accent-light
                text-[clamp(11px,1.4vmin,14px)]
                transition-all duration-300 ease-out
                group-hover:border-secondary-lighter/40
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex min-w-0 flex-col gap-[clamp(6px,1vmin,10px)]">
              <p
                className="
                  font-jetbrains uppercase text-secondary-lightest/60
                  text-[clamp(10px,1.2vmin,12px)]
                  leading-none
                "
              >
                Feature
              </p>

              <p className="project-paragraph">{feature}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}