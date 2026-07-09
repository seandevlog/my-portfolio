import GitHubIcon from "@/assets/GithubIcon";
import Button from "../ui/Button";
import Status from "../ui/Status";
import LinkedInIcon from "@/assets/LinkedInIcon";
import { FileText } from "lucide-react";

export default function HomeContact() {
  return (
    <section
      id="contact"
      className="
        flex h-dvh w-full flex-col items-center justify-center overflow-hidden
        px-section-x-xs py-section-y-xs
        s:px-section-x-s s:py-section-y-s
        m:px-section-x-m m:py-section-y-m
        l:px-section-x-l l:py-section-y-l
        xl:py-section-y-xl
      "
    >
      <div
        className="
          grid h-full w-full min-w-section-minw-xs grid-rows-[auto_minmax(0,1fr)_auto]
          gap-[clamp(16px,4vmin,48px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m
          l:min-w-section-minw-l
        "
      >
        <div className="flex min-h-0 w-full flex-col items-center gap-[clamp(12px,2.5vmin,24px)] m:items-start">
          <Status color="red">contact_endpoint</Status>

          <h2
            className="
              w-full max-w-[600px] text-center capitalize leading-[0.92]
              text-accent-light
              text-[clamp(40px,8vmin,80px)]
              m:text-left
            "
          >
            Let&apos;s build reliable systems
          </h2>
        </div>

        <div className="flex min-h-0 w-full flex-col justify-center gap-[clamp(16px,3vmin,36px)] m:items-end">
          <p className="w-full max-w-[500px] text-center font-outfit text-[clamp(14px,2vmin,22px)] leading-[1.35] text-secondary-lightest m:text-right">
            Looking for junior full-stack or backend developer opportunities
            where I can contribute to secure, reliable, and maintainable web
            applications for real business and operational needs.
          </p>

          <p className="w-full max-w-[500px] text-center font-outfit text-[clamp(14px,2vmin,22px)] leading-[1.35] text-secondary-lightest m:text-right">
            I&apos;m also available for freelance web development projects,
            including responsive websites, REST APIs, admin dashboards, internal
            tools, and maintenance support.
          </p>
        </div>

        <div className="flex min-h-0 w-full flex-col items-center gap-[clamp(12px,2.5vmin,20px)] m:items-start">
          <Button mode="primary">
            <p className="uppercase">email_me</p>
          </Button>

          <div className="flex items-center gap-x-[18px] gap-y-[10px]">
            <Button mode="secondary">
              <GitHubIcon className="h-[25px] w-[25px]" />
            </Button>

            <Button mode="secondary">
              <LinkedInIcon className="h-[25px] w-[25px]" />
            </Button>

            <Button mode="secondary">
              <FileText className="h-[25px] w-[25px]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}