import Skills from "@/data/skills";
import Status from "../ui/Status";

export default function HomeSkills() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[40px] px-section-x-xs s:px-section-minw-s m:px-section-minw-m l:px-section-minw-l py-section-y-xs s:py-section-y-s m:py-section-y-m l:py-section-y-l xl:py-section-y-xl">
      <div className="flex w-full flex-col gap-[40px] min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
        <div className="flex h-fit w-full flex-col gap-[12px]">
          <Status color="orange">system_status: skills</Status>

          <h2 className="text-h2-xs text-accent-light s:text-h2-s m:text-h2-m l:text-h2-l">
            Business Systems
          </h2>
        </div>

        <div>

        </div>
      </div>
    </section>
  )
}