"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useScrollFocus } from "@/contexts/ScrollFocusContext";

type ScrollFocusBlockProps = {
  id: string;
  children: ReactNode;
  className?: string;
  focusedClassName?: string;
  unfocusedClassName?: string;
};

export default function ScrollFocusBlock({
  id,
  children,
  className = "",
  focusedClassName = "scale-100 blur-0 opacity-100",
  unfocusedClassName = "scale-[0.99] blur-[1.5px] opacity-40",
}: ScrollFocusBlockProps) {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const { activeId, registerBlock, unregisterBlock } = useScrollFocus();

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
        ${isFocused ? focusedClassName : unfocusedClassName}
        ${className}
      `}
    >
      {children}
    </div>
  );
}