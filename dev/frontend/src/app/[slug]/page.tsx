import ProjectMeta from "@/components/project/ProjectMeta";
import Back from "@/components/ui/Back";
import Navbar from "@/components/ui/Navbar";
import Projects from "@/data/projects";
import { ProjectProvider } from "@/contexts/ProjectContext";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";

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

      <main
        className="
          flex w-full flex-col items-center gap-section-x-xs
          px-[40px] py-[40px]
        "
      >
        <Back />
        <ProjectMeta />
      </main>
    </ProjectProvider>
  );
}