import Status from "../ui/Status";
import Projects from "@/data/projects";
import ProjectsShowcase from "../ui/ProjectsShowcase";

export default function HomeProjects() {
  return (
    <section
      id="projects"
      className="
        relative flex h-fit w-full scroll-mt-[90px] justify-center
        px-section-x-xs py-section-y-xs
        s:px-section-x-s s:py-section-y-s
        m:px-section-x-m m:py-section-y-m
        l:px-section-x-l l:py-section-y-l
        xl:py-section-y-xl
      "
    >
      <div
        className="
          flex h-fit w-full min-w-section-minw-xs flex-col
          gap-[clamp(28px,4vmin,40px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m
          l:min-w-section-minw-l
        "
      >
        <div className="flex h-fit w-full flex-col gap-[clamp(10px,2vmin,12px)]">
          <Status color="orange">system_status: projects</Status>

          <h2
            className="
              text-accent-light
              text-[clamp(24px,5vmin,50px)]
              leading-[1.05]
            "
          >
            Business Systems
          </h2>
        </div>

        <ProjectsShowcase projects={Projects} />
      </div>
    </section>
  );
}