import GitHubIcon from "@/assets/GithubIcon";
import Button from "../ui/Button";
import Status from "../ui/Status";
import LinkedInIcon from "@/assets/LinkedInIcon";
import { FileText } from "lucide-react";

export default function HomeContact() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[80px] px-section-x-xs s:px-section-x-s m:px-section-x-m l:px-section-x-l py-section-x-xs s:py-section-x-s m:py-section-y-m l:py-section-y-l xl:py-section-y-xl">
      <div className="w-full min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l flex flex-col items-center m:items-start gap-[24px]">
        <Status color="red">contact_endpoint</Status>

        <h2 className="text-center m:text-left w-full m:w-[550px] xl:w-[600px] capitalize text-accent-light text-[56px] s:text-[62px] m:text-[68px] l:text-[74px] xl:text-[80px]">Let’s build reliable systems</h2>
      </div>

      <div className="w-full min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l flex flex-col m:items-end gap-[39px]">
        <p className="w-full m:w-[500px] text-center m:text-right font-outfit text-secondary-lightest text-p1-xs s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl">Looking for junior full-stack or backend developer opportunities where I can contribute to secure, reliable, and maintainable web applications for real business and operational needs.</p>
        <p className="w-full m:w-[500px] text-center m:text-right font-outfit text-secondary-lightest text-p1-xs s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl">I&apos;m also available for freelance web development projects, including responsive websites, REST APIs, admin dashboards, internal tools, and maintenance support.</p>
      </div>

      <div className="w-full min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l flex flex-col items-center m:items-start gap-[20px]">
        <Button mode="primary">
          <p className="uppercase">email_me</p>
        </Button>

        <div className="flex items-center gap-x-[18px] gap-y-[10px]">
          <Button mode="secondary">
            <GitHubIcon className="w-[25px] h-[25px]"/>
          </Button>
          <Button mode="secondary">
            <LinkedInIcon className="w-[25px] h-[25px]"/>
          </Button>
          <Button mode="secondary">
            <FileText className="w-[25px] h-[25px]"/>
          </Button>
        </div>
      </div>
    </section>
  )
}