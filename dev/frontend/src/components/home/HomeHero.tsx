import { X } from "lucide-react";
import Status from "../ui/Status";
import Button from "../ui/Button";

export default function HomeHero() {
  return (
    <section
      id="hero"
      className="
        flex h-dvh w-full flex-col items-center justify-center overflow-hidden
        gap-[clamp(18px,3vmin,28px)]
        px-section-x-xs py-section-y-xs
        s:px-section-x-s
        m:px-section-x-m
        l:px-section-x-l
      "
    >
      <Status color="green">system_status: active</Status>

      <div
        className="
          flex w-full max-w-[960px] flex-col items-center
          gap-y-[clamp(10px,1.8vmin,20px)]
          text-center uppercase
          text-[clamp(28px,8.5vmin,70px)]
          leading-[0.95]
        "
      >
        <p className="inline-flex items-center justify-center gap-[clamp(8px,1.5vmin,12px)] text-secondary-lighter">
          backend{" "}
          <X
            className="
              h-[clamp(20px,5.5vmin,48px)]
              w-[clamp(20px,5.5vmin,48px)]
              shrink-0
            "
          />{" "}
          data
        </p>

        <p className="max-w-[980px] text-pretty text-secondary-lightest leading-[1.4]">
          for secure, structured systems
        </p>
      </div>

      <div
        className="
          w-full max-w-[min(800px,90vw)]
          text-pretty text-center text-secondary-lightest
          text-[clamp(14px,2vmin,22px)]
          leading-[1.4]
        "
      >
        <p>
          I turn practical ideas into secure web platforms, connecting clean
          APIs, reliable data flows, and thoughtful interfaces into systems
          people can trust.
        </p>
      </div>

      <a href="#projects" aria-label="Scroll to projects section">
        <Button mode="primary">view_systems</Button>
      </a>
    </section>
  );
}