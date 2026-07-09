"use client";

import Image from "next/image";

export default function HomeAboutPortrait() {
  return (
    <div className="relative w-full overflow-hidden rounded-[8px] border border-accent-light/20 bg-primary-light aspect-[495/370] m:h-full m:min-h-[280px]">
      <Image
        src="/portrait-colored.png"
        alt="Developer portrait"
        fill
        priority
        sizes="(min-width: 1024px) 38vw, (min-width: 768px) 38vw, 100vw"
        className="object-cover grayscale transition duration-700 ease-out hover:grayscale-0"
      />
    </div>
  );
}