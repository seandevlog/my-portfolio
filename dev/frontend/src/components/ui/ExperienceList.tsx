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

      setOpenCategory(
        defaultCategory
          ? defaultCategory[0].toLowerCase()
          : categoryMap[0][0].toLowerCase()
      );
    }
  }, [categoryMap, openCategory]);

  return (
    <div
      className="
        flex h-fit w-full min-w-section-minw-xs flex-col
        gap-[clamp(20px,4vmin,28px)]
        pl-[20px]
        s:min-w-section-minw-s
        m:min-w-section-minw-m
        l:min-w-section-minw-l
      "
    >
      {categoryMap.map(([categoryName, count]) => {
        const categoryKey = categoryName.toLowerCase();
        const isOpen = openCategory === categoryKey;

        const categoryExperiences = experiences.filter(
          (experience) => experience.category.toLowerCase() === categoryKey
        );

        return (
          <div
            key={categoryName}
            className="flex h-fit w-full flex-col gap-[clamp(14px,3vmin,20px)]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenCategory(categoryKey)}
              className="flex h-fit w-full cursor-pointer items-center justify-between text-left"
            >
              <span
                className="
                  flex h-fit w-fit items-center
                  gap-[clamp(12px,3vmin,20px)]
                  font-jetbrains text-secondary-lightest
                "
              >
                <span
                  className="
                    font-semibold uppercase
                    text-[clamp(14px,2vmin,22px)]
                    leading-none
                  "
                >
                  {categoryName}
                </span>

                <span
                  className="
                    opacity-70
                    text-[clamp(11px,1.5vmin,16px)]
                    leading-none
                  "
                >
                  ({count})
                </span>
              </span>

              <span
                className="
                  relative flex items-center justify-center
                  text-secondary-lightest/70
                  h-[clamp(18px,2.5vmin,24px)]
                  w-[clamp(18px,2.5vmin,24px)]
                "
              >
                <Plus
                  className={`
                    absolute transition-all duration-300 ease-out
                    h-[clamp(18px,2.5vmin,24px)]
                    w-[clamp(18px,2.5vmin,24px)]
                    ${
                      isOpen
                        ? "rotate-90 scale-75 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }
                  `}
                />

                <Minus
                  className={`
                    absolute transition-all duration-300 ease-out
                    h-[clamp(18px,2.5vmin,24px)]
                    w-[clamp(18px,2.5vmin,24px)]
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
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`
                    flex w-full flex-col
                    gap-[clamp(16px,3vmin,20px)]
                    pl-[10px] pr-[clamp(16px,4vmin,30px)]
                    transition-transform duration-500 ease-out
                    ${isOpen ? "translate-y-0" : "-translate-y-3"}
                  `}
                >
                  {categoryExperiences.map((experience, index, array) => (
                    <React.Fragment
                      key={`${experience.company}-${experience.role}-${experience.timeline}`}
                    >
                      <div
                        className="
                          flex w-full flex-col
                          gap-[clamp(8px,2vmin,12px)]
                        "
                      >
                        <div className="flex w-full flex-col gap-[2px]">
                          <p
                            className="
                              font-jetbrains uppercase tracking-tighter text-secondary-lightest/60
                              text-[clamp(11px,1.5vmin,16px)]
                              leading-[1.2]
                            "
                          >
                            {experience.timeline}
                          </p>

                          <p
                            className="
                              font-jetbrains uppercase tracking-tighter text-secondary-lightest
                              text-[clamp(11px,1.5vmin,16px)]
                              leading-[1.2]
                            "
                          >
                            {experience.company}
                          </p>
                        </div>

                        <h3
                          className="
                            font-semibold text-accent-light
                            text-[clamp(16px,3vmin,30px)]
                            leading-[1.1]
                          "
                        >
                          {experience.role}
                        </h3>

                        <p
                          className="
                            text-secondary-lightest
                            text-[clamp(14px,2vmin,22px)]
                            leading-relaxed
                          "
                        >
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