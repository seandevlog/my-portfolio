"use client";

import { useProject } from "@/contexts/ProjectContext";
import Image from "next/image";

export default function ProjectScreenshots() {
  const project = useProject();

  if (!project.screenshots?.length) return null;

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
            interface_gallery
          </p>

          <h1 className="project-page-section">Interface Preview</h1>
        </div>

        <p
          className="
            max-w-[420px] font-outfit text-secondary-lightest/70
            text-[clamp(13px,1.6vmin,16px)]
            leading-[1.45]
            l:text-right
          "
        >
          Key screens showing how users interact with the system and complete
          core workflows.
        </p>
      </div>

      <div className="flex w-full flex-col gap-[clamp(24px,5vmin,64px)]">
        {project.screenshots.map((preview, index) => (
          <article
            key={index}
            className="
              grid w-full grid-cols-1 gap-[clamp(12px,3vmin,28px)]
              l:grid-cols-[minmax(0,1fr)_clamp(220px,24vw,320px)]
              l:items-start
            "
          >
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
                  src={preview.coverImage.src}
                  alt={preview.coverImage.alt}
                  fill
                  sizes="
                    (min-width: 1200px) 760px,
                    (min-width: 992px) 640px,
                    (min-width: 768px) 720px,
                    100vw
                  "
                  className="
                    object-contain
                    p-[clamp(10px,2vmin,24px)]
                  "
                />
              </div>
            </figure>

            <div
              className="
                flex h-full flex-col justify-between gap-[clamp(14px,3vmin,24px)]
                rounded-[12px] border border-accent-light/15 bg-white/[0.03]
                p-[clamp(16px,3vmin,24px)]
              "
            >
              <div className="flex flex-col gap-[clamp(8px,1.5vmin,12px)]">
                <p
                  className="
                    font-jetbrains uppercase text-secondary-lightest/50
                    text-[clamp(10px,1.2vmin,12px)]
                    leading-none
                  "
                >
                  screen_{String(index + 1).padStart(2, "0")}
                </p>

                <p className="project-paragraph">
                  {preview.description}
                </p>
              </div>

              <div
                className="
                  h-[1px] w-full bg-accent-light/10 l:hidden
                "
              />

              <p
                className="
                  font-jetbrains uppercase text-secondary-lightest/40
                  text-[clamp(10px,1.2vmin,12px)]
                  leading-none
                "
              >
                {preview.coverImage.alt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}