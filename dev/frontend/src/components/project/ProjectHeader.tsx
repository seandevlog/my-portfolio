"use client"

import { useProject } from "@/contexts/ProjectContext"
import Button from "../ui/Button";
import Link from "next/link";

export default function ProjectHeader() {
  const project = useProject();

  return (
    <section className="w-full min-w-section-minw-xs flex flex-col items-start gap-[20px]
      s:min-w-section-minw-s
      m:min-w-section-minw-m
      l:min-w-section-minw-l
    ">
      <h1 className="font-outfit text-accent-light text-h1-xs s:text-h1-s m:text-h1-m l:text-h1-l font-semibold">
        {project.title}
      </h1>

      <p className="project-paragraph">
        {project.description.long}
      </p>

      <div className="w-full flex flex-wrap items-center gap-x-[16px] gap-y-[10px]">
        {project.links?.live 
          ? <Link
            href={project.links?.live}
          >
            <Button mode="secondary">Live_Demo</Button>
          </Link> 
          : null
        }
        {project.links?.github
          ? <Link
            href={project.links?.github}
          >
            <Button mode="secondary">GitHub</Button>
          </Link> 
          : null
        }
        <Link
          href="/#projects"
        >
          <Button mode="secondary">All_Projects</Button>
        </Link> 
      </div>
    </section>
  )
}