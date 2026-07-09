import { X } from "lucide-react";
import Status from "../ui/Status";
import Button from "../ui/Button";

export default function HomeHero() {
  return (
    <section className="flex h-dvh w-full flex-col items-center justify-center gap-[24px] px-section-x-xs">
      <Status color="green">system_status: active</Status>

      <span className="w-full max-w-[360px] justify-center text-center text-h1-xs uppercase s:w-[550px] s:max-w-none s:text-h1-s m:w-[768px] m:text-h1-m l:w-[959px] l:text-h1-l">
        <p className="inline-flex items-center gap-2 text-secondary-lighter">
          backend{" "}
          <X className="h-[20px] w-[20px] s:h-[28px] s:w-[28px] m:h-[48px] m:w-[48px]" />{" "}
          data
        </p>

        <p className="text-secondary-lightest">
          for secure, structured systems
        </p>
      </span>

      <span className="w-full max-w-[320px] text-pretty text-center text-p1-xs text-secondary-lightest s:w-[530px] s:max-w-none s:text-p1-s m:w-[700px] m:text-p1-m l:text-p1-l xl:w-[800px] xl:text-p1-xl">
        <p>
          I turn practical ideas into secure web platforms, connecting clean
          APIs, reliable data flows, and thoughtful interfaces into systems
          people can trust.
        </p>
      </span>

      <a href="#projects" aria-label="Scroll to projects section">
        <Button mode="primary">view_systems</Button>
      </a>
    </section>
  );
}