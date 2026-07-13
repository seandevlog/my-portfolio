"use client";

import { useProject } from "@/contexts/ProjectContext";

export default function ProjectChallenges() {
  const project = useProject();

  if (!project.challenges?.length) return null;

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
            decision_log
          </p>

          <h1 className="project-page-section">Challenges & Decisions</h1>
        </div>

        <p
          className="
            max-w-[420px] font-outfit text-secondary-lightest/70
            text-[clamp(13px,1.6vmin,16px)]
            leading-[1.45]
            l:text-right
          "
        >
          Key tradeoffs, implementation choices, and constraints handled during
          the build.
        </p>
      </div>

      <div
        className="
          grid w-full grid-cols-1
          gap-[clamp(12px,2.4vmin,18px)]
        "
      >
        {project.challenges.map(({ challenge, decision }, index) => (
          <article
            key={`${challenge}-${index}`}
            className="
              grid w-full grid-cols-1 overflow-hidden rounded-[14px]
              border border-accent-light/15 bg-white/[0.03]
              transition-all duration-300 ease-out
              hover:border-accent-light/30 hover:bg-white/[0.06]
              m:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            "
          >
            <div
              className="
                flex flex-col gap-[clamp(10px,2vmin,16px)]
                border-b border-accent-light/10
                p-[clamp(16px,3vmin,24px)]
                m:border-b-0 m:border-r
              "
            >
              <div className="flex items-center justify-between gap-[16px]">
                <p
                  className="
                    font-jetbrains uppercase text-red-300/70
                    text-[clamp(10px,1.2vmin,12px)]
                    leading-none
                  "
                >
                  challenge
                </p>

                <span
                  className="
                    font-jetbrains text-secondary-lightest/30
                    text-[clamp(10px,1.2vmin,12px)]
                    leading-none
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="project-paragraph">{challenge}</p>
            </div>

            <div
              className="
                flex flex-col gap-[clamp(10px,2vmin,16px)]
                p-[clamp(16px,3vmin,24px)]
              "
            >
              <p
                className="
                  font-jetbrains uppercase text-green-300/70
                  text-[clamp(10px,1.2vmin,12px)]
                  leading-none
                "
              >
                decision
              </p>

              <p className="project-paragraph">{decision}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}