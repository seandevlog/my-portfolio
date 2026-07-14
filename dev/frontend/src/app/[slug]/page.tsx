import Back from "@/components/ui/Back";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/data/projects";
import { ProjectProvider } from "@/contexts/ProjectContext";
import { ScrollFocusProvider } from "@/contexts/ScrollFocusContext";
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
import ScrollFocusBlock from "@/components/ui/ScrollFocusBlock";

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

      <ScrollFocusProvider key={slug}>
        <main
          className="
            flex w-full flex-col items-center

            gap-[clamp(56px,9vmin,120px)]

            px-section-x-xs py-[clamp(32px,6vmin,72px)]
            s:px-section-x-s
            m:px-section-x-m
            l:px-section-x-l
          "
        >
          <ScrollFocusBlock id="intro">
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
          </ScrollFocusBlock>

          <ScrollFocusBlock id="overview">
            <ProjectOverview />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="problem">
            <ProjectProblem />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="solution">
            <ProjectSolution />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="features">
            <ProjectFeatures />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="highlight">
            <ProjectHighlight />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="architecture">
            <ProjectArchitecture />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="screenshots">
            <ProjectScreenshots />
          </ScrollFocusBlock>

          <ScrollFocusBlock id="challenges">
            <ProjectChallenges />
          </ScrollFocusBlock>
        </main>
      </ScrollFocusProvider>
    </ProjectProvider>
  );
}