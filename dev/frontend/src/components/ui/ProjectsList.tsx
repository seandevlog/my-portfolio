"use client";

import React, { useState } from "react";
import ProjectItem from "../ui/ProjectItem";
import type Project from "@/types/projects";

type ProjectsListProps = {
  projects: Project[];
};

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="flex h-fit w-full min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
      <div className="flex h-fit w-full flex-col gap-[16px] pl-[20px]">
        {projects.map((project, index, array) => (
          <React.Fragment key={project.title}>
            <ProjectItem
              project={project}
              isActive={activeProject === project.title}
              setActiveProject={setActiveProject}
            />

            {index < array.length - 1 && (
              <div className="h-[1px] w-full bg-accent-light/20" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}