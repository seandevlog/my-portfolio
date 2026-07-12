"use client"

import { useProject } from "@/contexts/ProjectContext"

export default function ProjectContent() {
  const project = useProject();

  return (
    <section className="w-full min-w-section-minw-xs flex flex-col items-start gap-[20px]
      s:min-w-section-minw-s
      m:min-w-section-minw-m
      l:min-w-section-minw-l
    ">
      <h1 className="project-page-section">
        System Overview
      </h1>
      <p className="project-paragraph">
        {project.overview}
      </p>

      <h1 className="project-page-section">
        System Overview
      </h1>

      <p className="project-paragraph">
        {project.overview}
      </p>
    </section>
  )
}