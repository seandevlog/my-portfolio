import Skills from "@/data/skills";
import Status from "../ui/Status";
import Cookie from "../ui/Cookie";

export default function HomeSkills() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[40px] px-section-x-xs py-section-y-xs s:px-section-x-s s:py-section-y-s m:px-section-x-m m:py-section-y-m l:px-section-x-l l:py-section-y-l xl:py-section-y-xl">
      <div className="flex w-full min-w-section-minw-xs flex-col gap-[40px] s:min-w-section-minw-s m:min-w-section-minw-m l:min-w-section-minw-l">
        <div className="flex h-fit w-full flex-col gap-[12px]">
          <Status color="orange">system_status: skills</Status>

          <h2 className="text-h2-xs text-accent-light s:text-h2-s m:text-h2-m l:text-h2-l">
            Business Systems
          </h2>

          <p className="w-full max-w-[400px] text-p1-xs text-secondary-lightest s:max-w-[440px] s:text-p1-s m:max-w-[490px] m:text-p1-m l:max-w-[560px] l:text-p1-l xl:text-p1-xl">
            Technologies I use to build secure APIs, structured data flows, and
            maintainable full-stack systems
          </p>
        </div>

        <div className="flex w-full min-w-section-minw-xs flex-col gap-x-[32px] gap-y-[40px] pl-[20px] s:min-w-section-minw-s m:grid m:min-w-section-minw-m m:grid-cols-3 l:min-w-section-minw-l">
          {Skills.map((skill) => {
            return (
              <div
                key={skill.category}
                className="flex w-full flex-col gap-[20px] divide-y divide-accent-light/70"
              >
                <div className="flex w-full flex-col pb-[4px] font-mono text-p2-xs uppercase text-secondary-lightest s:text-p2-s m:text-p2-m l:text-p2-l xl:text-p2-xl">
                  <p>{skill.category}</p>
                </div>

                <div className="flex w-full flex-wrap gap-x-[15px] gap-y-[10px]">
                  {skill.names.map((item) => (
                    <Cookie key={item} mode="dark" text={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}