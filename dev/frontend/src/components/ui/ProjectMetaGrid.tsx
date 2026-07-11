"use client";

import { useProject } from "@/contexts/ProjectContext";
import Cookie from "../ui/Cookie";

const metaClassName =
  "font-jetbrains text-accent-light text-[clamp(10px,1.45vmin,16px)] uppercase py-[clamp(5px,1vmin,8px)]";

export default function ProjectMetaGrid() {
  const project = useProject();

  return (
    <div
      className="
        grid w-full grid-cols-[auto_minmax(0,1fr)]
        gap-x-[16px] gap-y-[14px]
      "
    >
      <p className={metaClassName}>type</p>

      <div className="flex w-full flex-wrap gap-[6px]">
        <Cookie text={project.type} mode="light" />
      </div>

      <p className={metaClassName}>scope</p>

      <div className="flex w-full flex-wrap gap-[6px]">
        {project.scope.map((scope) => (
          <Cookie key={scope} text={scope} mode="light" />
        ))}
      </div>

      <p className={metaClassName}>stack</p>

      <div className="flex w-full flex-wrap gap-[6px]">
        {project.stack.map((stack) => (
          <Cookie key={stack} text={stack} mode="light" />
        ))}
      </div>
    </div>
  );
}