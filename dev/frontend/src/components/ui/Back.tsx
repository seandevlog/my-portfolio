"use client";

import { ArrowUpLeft } from "lucide-react";
import Link from "next/link";

export default function Back() {
  return (
    <Link
      href="/#projects"
      className="
        group inline-flex w-fit items-center gap-[clamp(6px,1vmin,10px)]
        rounded-[6px]
        font-jetbrains uppercase text-secondary-lightest/70
        text-[clamp(11px,1.4vmin,14px)]
        transition-colors duration-300 ease-out
        hover:text-secondary-lightest
        focus-visible:outline-1 focus-visible:outline-secondary-lighter
      "
    >
      <ArrowUpLeft
        className="
          size-[clamp(16px,2vmin,20px)]
          transition-transform duration-300 ease-out
          group-hover:-translate-x-0.5 group-hover:-translate-y-0.5
        "
      />

      Back to projects
    </Link>
  );
}