"use client";

import type Experience from "@/types/experience";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

type ExperienceListProps = {
  experiences: Experience[];
};

const DEFAULT_CATEGORY = "development";

const getCategoryCounts = (experiences: Experience[]) => {
  const counts = new Map<string, number>();

  experiences.forEach((experience) => {
    counts.set(experience.category, (counts.get(experience.category) ?? 0) + 1);
  });

  return Array.from(counts);
};

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const categoryMap = useMemo(
    () => getCategoryCounts(experiences),
    [experiences]
  );

  const [openCategory, setOpenCategory] = useState(DEFAULT_CATEGORY);

  useEffect(() => {
    if (categoryMap.length === 0) return;

    const hasOpenCategory = categoryMap.some(
      ([categoryName]) => categoryName.toLowerCase() === openCategory
    );

    if (!hasOpenCategory) {
      const defaultCategory = categoryMap.find(
        ([categoryName]) => categoryName.toLowerCase() === DEFAULT_CATEGORY
      );

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenCategory(
        defaultCategory
          ? defaultCategory[0].toLowerCase()
          : categoryMap[0][0].toLowerCase()
      );
    }
  }, [categoryMap, openCategory]);

  return (
    <div className="flex h-fit w-full min-w-section-minw-xs flex-col gap-[28px] pl-[20px] s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
      {categoryMap.map(([categoryName, count]) => {
        const categoryKey = categoryName.toLowerCase();
        const isOpen = openCategory === categoryKey;

        const categoryExperiences = experiences.filter(
          (experience) => experience.category.toLowerCase() === categoryKey
        );

        return (
          <div
            key={categoryName}
            className="flex h-fit w-full flex-col gap-[20px]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenCategory(categoryKey)}
              className="flex h-fit w-full items-center justify-between text-left cursor-pointer"
            >
              <span className="flex h-fit w-fit items-center gap-[20px] font-jetbrains text-secondary-lightest">
                <span className="text-p1-xs font-semibold uppercase s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl">
                  {categoryName}
                </span>

                <span className="text-p2-xs opacity-70 s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl">
                  ({count})
                </span>
              </span>

              <span className="relative flex h-5 w-5 items-center justify-center text-secondary-lightest/70">
                <Plus
                  className={`
                    absolute h-5 w-5 transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? "rotate-90 scale-75 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }
                  `}
                />

                <Minus
                  className={`
                    absolute h-5 w-5 transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-75 opacity-0"
                    }
                  `}
                />
              </span>
            </button>

            <div
              className={`
                grid transition-[grid-template-rows,opacity] duration-500 ease-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`
                    flex w-full flex-col gap-[20px] pl-[10px] pr-[30px]
                    transition-transform duration-500 ease-out
                    ${isOpen ? "translate-y-0" : "-translate-y-3"}
                  `}
                >
                  {categoryExperiences.map((experience, index, array) => (
                    <React.Fragment
                      key={`${experience.company}-${experience.role}-${experience.timeline}`}
                    >
                      <div className="flex w-full flex-col gap-[8px]">
                        <div className="flex w-full flex-col">
                          <p className="font-jetbrains text-p2-xs uppercase tracking-tighter text-secondary-lightest/60 s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl">
                            {experience.timeline}
                          </p>

                          <p className="font-jetbrains text-p2-xs uppercase tracking-tighter text-secondary-lightest s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl">
                            {experience.company}
                          </p>
                        </div>

                        <h3 className="text-h3-xs font-semibold text-accent-light s:text-h3-s m:text-h3-m l:text-h3-l">
                          {experience.role}
                        </h3>

                        <p className="text-p1-xs leading-relaxed text-secondary-lightest s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl">
                          {experience.description}
                        </p>
                      </div>

                      {index < array.length - 1 && (
                        <div className="h-[1px] w-full bg-accent-light/20" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}