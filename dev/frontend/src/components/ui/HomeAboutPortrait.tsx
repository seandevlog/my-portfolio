"use client";

import Image from "next/image";

export default function HomeAboutPortrait() {
  return (
    <div
      className="
        relative min-h-0 w-full overflow-hidden rounded-[8px]
        border border-accent-light/20 bg-primary-light
        aspect-[495/370]
        m:h-full m:max-h-[min(70dvh,520px)]
      "
    >
      <Image
        src="/portrait-colored.png"
        alt="Developer portrait"
        fill
        priority
        sizes="(min-width: 1200px) 38vw, (min-width: 768px) 38vw, 100vw"
        className="object-cover grayscale transition duration-700 ease-out hover:grayscale-0"
      />
    </div>
  );
}