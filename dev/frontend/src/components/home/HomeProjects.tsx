import Status from "../ui/Status";
import Projects from "@/data/projects";
import ProjectsShowcase from "../ui/ProjectsShowcase";

export default function HomeProjects() {
  return (
    <section className="relative flex h-fit w-full justify-center px-section-x-xs py-section-y-xs s:px-section-x-s s:py-section-y-s m:min-h-dvh xl:min-h-0 m:px-section-x-m m:py-section-y-m l:px-section-x-l l:py-section-y-l xl:py-section-y-xl">
      <div className="flex h-fit w-full min-w-section-minw-xs flex-col gap-[40px] s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
        <div className="flex h-fit w-full flex-col gap-[12px]">
          <Status color="orange">system_status: projects</Status>

          <h2 className="text-h2-xs text-accent-light s:text-h2-s m:text-h2-m l:text-h2-l">
            Business Systems
          </h2>
        </div>

        <ProjectsShowcase projects={Projects} />
      </div>
    </section>
  );
}