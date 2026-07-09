"use client";

import { useEffect, useState } from "react";
import { SquareTerminal } from "lucide-react";

export default function Navbar() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-[100] flex h-fit w-full items-center justify-center
        border border-[#ffffff10] bg-black-base
        px-[clamp(16px,4vw,24px)]
        py-[clamp(10px,2vmin,15px)]
        transition-all duration-500 ease-out
        ${
          isContactVisible
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      <div
        className="
          flex h-fit w-full min-w-section-minw-xs flex-wrap justify-between items-center
          gap-x-[clamp(14px,3vw,20px)]
          gap-y-[clamp(14px,2vmin,15px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m
          l:min-w-section-minw-l
        "
      >
        <div className="flex h-fit w-fit items-center gap-[clamp(5px,1vmin,8px)]">
          <SquareTerminal
            className="
              shrink-0 stroke-secondary-lighter
              h-[clamp(18px,2.5vmin,22px)]
              w-[clamp(18px,2.5vmin,22px)]
            "
          />

          <p
            className="
              font-jetbrains uppercase tracking-tighter text-secondary-lighter
              text-[clamp(13px,2vmin,16px)]
              leading-none
            "
          >
            sean_delos_santos_os
          </p>
        </div>

        <ul
          className="
            flex h-fit w-full basis-full list-none items-center justify-between
            text-secondary-lighter
            text-[clamp(12px,1.8vmin,14px)]
            leading-none
            s:w-fit s:basis-auto s:justify-start
            s:gap-[clamp(14px,3vw,18px)]
          "
        >
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Resume</li>
          <li>Mail</li>
        </ul>
      </div>
    </header>
  );
}