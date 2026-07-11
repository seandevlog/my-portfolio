
import ProjectMetaGrid from "../ui/ProjectMetaGrid";
import ProjectStatus from "../ui/ProjectStatus";

export default function ProjectMeta() {
  return (
    <section className="w-full min-w-section-minw-xs flex flex-col items-start gap-[24px]
      s:min-w-section-minw-s
      m:min-w-section-minw-m
      l:min-w-section-minw-l
    ">
      <ProjectStatus />
      <ProjectMetaGrid />
    </section>
  )
}