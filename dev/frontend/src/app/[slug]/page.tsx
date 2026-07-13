import Back from "@/components/ui/Back";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/data/projects";
import { ProjectProvider } from "@/contexts/ProjectContext";
import { ProjectFocusProvider } from "@/contexts/ProjectFocusContext";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";
import ProjectMeta from "@/components/project/ProjectMeta";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectProblem from "@/components/project/ProjectProblem";
import ProjectSolution from "@/components/project/ProjectSolution";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectHighlight from "@/components/project/ProjectHighlight";
import ProjectArchitecture from "@/components/project/ProjectArchitecture";
import ProjectScreenshots from "@/components/project/ProjectScreenshots";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectFocusBlock from "@/components/ui/ProjectFocusBlock";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = Projects.find((project) => slugify(project.title) === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectProvider project={project}>
      <Navbar />

      <ProjectFocusProvider key={slug}>
        <main
          className="
            flex w-full flex-col items-center
            gap-[clamp(40px,8vmin,96px)]
            px-[40px] py-[40px]
          "
        >
          <ProjectFocusBlock id="intro">
            <div
              className="
                flex w-full max-w-section-minw-l flex-col
                gap-[clamp(20px,4vmin,48px)]
              "
            >
              <Back />

              <div
                className="
                  grid w-full grid-cols-1
                  gap-[clamp(24px,5vmin,56px)]
                  l:grid-cols-[minmax(0,1fr)_clamp(280px,30vw,380px)]
                  l:items-start
                "
              >
                <ProjectHeader />
                <ProjectMeta />
              </div>
            </div>
          </ProjectFocusBlock>

          <ProjectFocusBlock id="overview">
            <ProjectOverview />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="problem">
            <ProjectProblem />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="solution">
            <ProjectSolution />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="features">
            <ProjectFeatures />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="highlight">
            <ProjectHighlight />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="architecture">
            <ProjectArchitecture />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="screenshots">
            <ProjectScreenshots />
          </ProjectFocusBlock>

          <ProjectFocusBlock id="challenges">
            <ProjectChallenges />
          </ProjectFocusBlock>
        </main>
      </ProjectFocusProvider>
    </ProjectProvider>
  );
}