"use client";

import { useEffect, useState } from "react";
import { SquareTerminal } from "lucide-react";
import Link from "next/link";
import navItems from "@/data/navItems";

const navLinkClassName = `
  flex min-h-[44px] w-full items-center justify-center
  px-0
  transition-colors duration-300 ease-out
  hover:bg-white/5
  focus-visible:outline focus-visible:outline-1 focus-visible:outline-secondary-lighter
  s:min-h-[36px] s:w-fit s:rounded-[4px] s:px-[8px]
  m:px-[10px]
`;

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
      <nav
        aria-label="Primary navigation"
        className="
          flex h-fit w-full min-w-section-minw-xs flex-wrap items-center justify-start
          gap-x-[clamp(14px,3vw,20px)]
          gap-y-[clamp(14px,2vmin,15px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m
          l:min-w-section-minw-l
        "
      >
        <div className="flex h-fit min-w-0 items-center gap-[clamp(5px,1vmin,8px)]">
          <Link
            href="#hero"
            aria-label="Back to hero section"
            className="
              flex min-h-[44px] min-w-0 items-center gap-[clamp(5px,1vmin,8px)]
              rounded-[4px] px-0
              transition-colors duration-300 ease-out
              hover:bg-white/5
              focus-visible:outline-1 focus-visible:outline-secondary-lighter
              s:min-h-[36px] s:px-[8px]
              m:px-[10px]
            "
          >
            <SquareTerminal
              className="
                h-[clamp(18px,2.5vmin,22px)]
                w-[clamp(18px,2.5vmin,22px)]
                shrink-0 stroke-secondary-lighter
              "
            />

            <p
              className="
                min-w-0 truncate font-jetbrains uppercase tracking-tighter
                text-secondary-lighter
                text-[clamp(13px,2vmin,16px)]
                leading-none
              "
            >
              sean_delos_santos_os
            </p>
          </Link>
        </div>

        <ul
          className="
            grid w-full basis-full grid-cols-4 overflow-hidden
            list-none text-secondary-lighter
            text-[clamp(12px,1.8vmin,14px)]
            leading-none

            s:ml-auto s:flex s:w-fit s:basis-auto s:items-center s:justify-start
            s:gap-[clamp(8px,2vw,18px)]
            s:overflow-visible
          "
        >
          {navItems.map((item) => (
            <li key={item.label} className="min-w-0">
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={navLinkClassName}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}