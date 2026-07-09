"use client";

import React, { Dispatch, SetStateAction } from "react";
import ProjectItem from "../ui/ProjectItem";
import type Project from "@/types/projects";

type ProjectsListProps = {
  projects: Project[];
  activeProject: string | null;
  setActiveProject: Dispatch<SetStateAction<string | null>>;
  isAutoActivationLocked: boolean;
  activateProjectAfterScroll: (
    projectTitle: string,
    getTargetScrollY: () => number | null
  ) => void;
};

export default function ProjectsList({
  projects,
  activeProject,
  setActiveProject,
  isAutoActivationLocked,
  activateProjectAfterScroll,
}: ProjectsListProps) {
  return (
    <div
      className="
        flex h-fit w-full flex-col
        gap-[clamp(16px,4vmin,38px)]
        pl-[clamp(12px,2.5vmin,20px)]
      "
    >
      {projects.map((project, index, array) => (
        <React.Fragment key={project.title}>
          <ProjectItem
            project={project}
            isActive={activeProject === project.title}
            setActiveProject={setActiveProject}
            isAutoActivationLocked={isAutoActivationLocked}
            activateProjectAfterScroll={activateProjectAfterScroll}
          />

          {index < array.length - 1 && (
            <div className="h-[1px] w-full bg-accent-light/20" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}