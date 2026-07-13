"use client";

import { useProject } from "@/contexts/ProjectContext";
import Button from "../ui/Button";
import Link from "next/link";

export default function ProjectHeader() {
  const project = useProject();

  return (
    <header
      className="
        flex w-full min-w-0 flex-col items-start
        gap-[clamp(18px,3vmin,32px)]
      "
    >
      <div className="flex w-full flex-col gap-[clamp(10px,2vmin,18px)]">
        <p
          className="
            font-jetbrains uppercase text-secondary-lightest/60
            text-[clamp(11px,1.3vmin,13px)]
            leading-none
          "
        >
          {project.type}
        </p>

        <h1
          className="
            max-w-[980px] font-outfit font-semibold uppercase text-accent-light
            text-[clamp(42px,9vmin,112px)]
            leading-[0.9] tracking-[-0.055em]
          "
        >
          {project.title}
        </h1>
      </div>

      <p className="project-paragraph max-w-[760px]">
        {project.description.long}
      </p>

      <div
        className="
          flex w-full flex-wrap items-center
          gap-x-[clamp(10px,2vmin,16px)]
          gap-y-[clamp(10px,2vmin,14px)]
        "
      >
        {project.links?.live ? (
          <Link
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button mode="secondary">Live_Demo</Button>
          </Link>
        ) : null}

        {project.links?.github ? (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button mode="secondary">GitHub</Button>
          </Link>
        ) : null}

        <Link href="/#projects">
          <Button mode="secondary">All_Projects</Button>
        </Link>
      </div>
    </header>
  );
}