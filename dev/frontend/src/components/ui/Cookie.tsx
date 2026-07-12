"use client";

import { useEffect, useRef, useState } from "react";

type CookieProps = {
  text: string;
  mode: "dark" | "light";
};

const BYTE_CHARS = ["0", "1"];
const REVEAL_SPEED_MS = 90;

function getDeterministicByte(index: number) {
  return index % 2 === 0 ? "0" : "1";
}

function getRandomByte() {
  return BYTE_CHARS[Math.floor(Math.random() * BYTE_CHARS.length)];
}

function createByteText(
  text: string,
  revealedCount: number,
  useRandomBytes: boolean
) {
  return text
    .split("")
    .map((char, index) => {
      if (char === " ") return " ";
      if (index < revealedCount) return char;

      return useRandomBytes ? getRandomByte() : getDeterministicByte(index);
    })
    .join("");
}

export default function Cookie({ text, mode }: CookieProps) {
  const cookieRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef(false);

  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    setDisplayText(createByteText(text, 0, false));
    hasAnimatedRef.current = false;
  }, [text]);

  useEffect(() => {
    if (!cookieRef.current || !text) return;

    let interval: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;

        let revealedCount = 0;

        interval = window.setInterval(() => {
          revealedCount += 1;

          setDisplayText(createByteText(text, revealedCount, true));

          if (revealedCount >= text.length) {
            setDisplayText(text);

            if (interval !== null) {
              window.clearInterval(interval);
            }
          }
        }, REVEAL_SPEED_MS);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(cookieRef.current);

    return () => {
      observer.disconnect();

      if (interval !== null) {
        window.clearInterval(interval);
      }
    };
  }, [text]);

  const background = mode === "dark" ? "#101415" : "#ffffff05";
  const color = mode === "dark" ? "#e0e3e5" : "#b7c7e8";

  return (
    <div
      ref={cookieRef}
      aria-label={text}
      style={{
        background,
        color,
      }}
      className="
        flex items-center justify-center whitespace-nowrap rounded-[clamp(3px,0.7vmin,4px)]
        border border-[#ffffff]/10
        px-[clamp(6px,1.2vmin,8px)]
        py-[clamp(5px,1vmin,8px)]
        font-jetbrains
        text-[clamp(10px,1.45vmin,16px)]
        leading-none
      "
    >
      {displayText}
    </div>
  );
}