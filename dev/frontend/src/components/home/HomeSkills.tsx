import Skills from "@/data/skills";
import Status from "../ui/Status";
import Cookie from "../ui/Cookie";

export default function HomeSkills() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[40px] px-section-x-xs s:px-section-x-s m:px-section-x-m l:px-section-x-l py-section-y-xs s:py-section-y-s m:py-section-y-m l:py-section-y-l xl:py-section-y-xl">
      <div className="flex w-full flex-col gap-[40px] min-w-section-minw-xs s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
        <div className="flex h-fit w-full flex-col gap-[12px]">
          <Status color="orange">system_status: skills</Status>

          <h2 className="text-h2-xs text-accent-light s:text-h2-s m:text-h2-m l:text-h2-l">
            Business Systems
          </h2>

          <p className="w-full max-w-[400px] s:max-w-[440px] m:max-w-[490px] l:max-w-[560px] text-secondary-lightest text-p1-xs s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p2-xl">Technologies I use to build secure APIs, structured data flows, and maintainable full-stack systems</p>
        </div>

        <div className="w-full min-w-section-minw-xs s:min-w-section-x-s m:min-w-section-minw-m l:min-w-section-minw-l flex flex-col m:grid m:grid-cols-3 pl-[20px] gap-y-[40px] gap-x-[32px]">
          {Skills.map((skill, index) => {
            return (
              <div key={index} className="w-full flex flex-col gap-[20px] divide-y divide-accent-light/70">
                <span className="w-full flex flex-col pb-[4px] text-p2-xs s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl uppercase font-jetbrains text-secondary-lightest">
                  <p>{skill.category}</p>
                </span>
                <div className="w-full flex flex-wrap gap-y-[10px] gap-x-[15px]">
                  {skill.names.map((item, index) => (
                    <Cookie 
                      key={index}
                      mode="dark"
                    >
                      <p className="text-p2-xs s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl">{item}</p>
                    </Cookie>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}