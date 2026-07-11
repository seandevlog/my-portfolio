"use client"

import type ProjectType from "@/types/project"
import Status from "./Status";
import type { statusColors } from "@/types/status";
import { useProject } from "@/contexts/ProjectContext";

const statusColor = (status: ProjectType["status"]): statusColors => {
  switch(status) {
    case "Live":
      return "green";
    case "Archived":
      return "blue";
    case "Private":
      return "red";
    case "Planning":
    case "Designing":
    case "Developing":
    case "Testing":
    case "Handover Phase":
      return "orange";
  }
}

export default function ProjectStatus() {
  const project = useProject();

  return (
    <Status color={statusColor(project.status)}>
      {`project_status: ${project.status}`}
    </Status>
  )
}