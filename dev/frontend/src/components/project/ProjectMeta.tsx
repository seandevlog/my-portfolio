import ProjectMetaGrid from "../ui/ProjectMetaGrid";
import ProjectStatus from "../ui/ProjectStatus";

export default function ProjectMeta() {
  return (
    <aside
      className="
        flex w-full flex-col items-start
        gap-[clamp(16px,3vmin,24px)]
        rounded-[12px] border border-accent-light/15 bg-white/[0.03]
        p-[clamp(16px,3vmin,24px)]
      "
    >
      <ProjectStatus />
      <ProjectMetaGrid />
    </aside>
  );
}