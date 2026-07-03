"use client"

import type Experience from "@/types/experience"
import { useMemo } from "react";

type ExperienceListProps = {
  experiences: Experience[];
}

const getCategoryCounts = (experiences: Experience[]) => {
  const counts = new Map<string, number>();

  experiences.forEach((experience) => {
    counts.set(experience.category, (counts.get(experience.category) ?? 0) + 1);
  });

  return Array.from(counts);
};

export default function ExperienceList({ experiences }: ExperienceListProps) {

  const categoryMap = useMemo(() => 
    getCategoryCounts(experiences), 
  [experiences]); 

  return (
    <div className="h-fit w-full flex flex-col gap-[28px] pl-[20px] min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
      {categoryMap.map(category => (
        <div key={category[0]} className="h-fit w-full flex flex-col gap-[20px]">
          <div className="h-fit w-full flex items-center justify-between">
            <span className="h-fit w-fit flex items-center gap-[20px] text-secondary-lightest font-jetbrains">
              <p className="text-p1-xs s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl font-semibold uppercase">{category[0]}</p>
              <p className="text-p2-xs s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl opacity-70">{category[1]}</p>
            </span>
            
          </div>
        </div>
      ))}
    </div>
  )
}