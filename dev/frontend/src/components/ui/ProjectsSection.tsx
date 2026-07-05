"use client";

import React, { Dispatch, SetStateAction } from "react";
import ProjectItem from "../ui/ProjectItem";
import type Project from "@/types/projects";

type ProjectsSectionProps = {
  projects: Project[];
  activeProject: string | null;
  setActiveProject: Dispatch<SetStateAction<string | null>>;
};

export default function ProjectsSection({
  projects,
  activeProject,
  setActiveProject,
}: ProjectsSectionProps) {
  return (
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
  );
}