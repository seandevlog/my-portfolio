"use client";

import { createContext, ReactNode, useContext } from "react";
import type ProjectType from "@/types/project";

type ProjectContextValue = {
  project: ProjectType;
};

const ProjectContext = createContext<ProjectContextValue | null>(null);

type ProjectProviderProps = {
  project: ProjectType;
  children: ReactNode;
};

export function ProjectProvider({ project, children }: ProjectProviderProps) {
  return (
    <ProjectContext.Provider value={{ project }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProject must be used inside a ProjectProvider");
  }

  return context.project;
}