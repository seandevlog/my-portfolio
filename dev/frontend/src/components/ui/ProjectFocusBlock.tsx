"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useProjectFocus } from "@/contexts/ProjectFocusContext";

type ProjectFocusBlockProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function ProjectFocusBlock({
  id,
  children,
  className = "",
}: ProjectFocusBlockProps) {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const { activeId, registerBlock, unregisterBlock } = useProjectFocus();

  const isFocused = activeId === id;

  useEffect(() => {
    if (!blockRef.current) return;

    const element = blockRef.current;

    registerBlock(id, element);

    return () => {
      unregisterBlock(id);
    };
  }, [id, registerBlock, unregisterBlock]);

  return (
    <div
      ref={blockRef}
      className={`
        w-full min-w-section-minw-xs transition-all duration-700 ease-out
        motion-reduce:transition-none
        ${
          isFocused
            ? "scale-100 blur-0 opacity-100"
            : "scale-[0.99] blur-[1.5px] opacity-40"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}