import Projects from "@/data/projects";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = Projects.find(
    (project) => slugify(project.title) === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title}</h1>
    </main>
  );
}