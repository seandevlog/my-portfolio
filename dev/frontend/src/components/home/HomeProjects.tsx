import Status from "../ui/Status";
import ProjectsList from "../ui/ProjectsList";
import Projects from "@/data/projects";

export default function HomeProjects() {
  return (
    <section className="flex h-fit w-full flex-col items-center justify-center gap-[40px] px-section-x-xs py-section-y-xs s:px-section-x-s s:py-section-y-s m:px-section-x-m m:py-section-y-m l:px-section-x-l l:py-section-y-l xl:py-section-y-xl">
      <div className="flex h-fit w-full min-w-section-minw-xs flex-col gap-[12px] s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
        <Status color="bg-[#f97316]">system_status: active</Status>

        <h2 className="text-h2-xs text-accent-light s:text-h2-s m:text-h2-m l:text-h2-l">
          Business Systems
        </h2>
      </div>

      <ProjectsList projects={Projects} />
    </section>
  );
}