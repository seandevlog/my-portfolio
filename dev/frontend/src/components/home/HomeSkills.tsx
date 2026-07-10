import Skills from "@/data/skills";
import Status from "../ui/Status";
import Cookie from "../ui/Cookie";

export default function HomeSkills() {
  return (
    <section
      className="
        flex h-fit w-full flex-col items-center justify-center
        px-section-x-xs py-section-y-xs
        s:px-section-x-s s:py-section-y-s
        m:px-section-x-m m:py-section-y-m
        l:px-section-x-l l:py-section-y-l
        xl:py-section-y-xl
      "
    >
      <div
        className="
          flex h-fit w-full min-w-section-minw-xs flex-col
          gap-[clamp(28px,4vmin,40px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m
          l:min-w-section-minw-l
        "
      >
        <div className="flex h-fit w-full flex-col gap-[12px]">
          <Status color="orange">system_status: skills</Status>

          <h2
            className="
              text-accent-light
              text-[clamp(24px,5vmin,50px)]
              leading-[1.05]
            "
          >
            Core Technologies
          </h2>

          <p
            className="
              w-full max-w-[560px] text-secondary-lightest
              text-[clamp(14px,2vmin,22px)]
              leading-[1.4]
            "
          >
            Technologies I use to build secure APIs, structured data flows, and
            maintainable full-stack systems
          </p>
        </div>

        <div
          className="
            grid h-fit w-full min-w-section-minw-xs
            grid-cols-1 gap-x-[32px] gap-y-[40px]
            pl-[20px]
            s:min-w-section-minw-s
            m:min-w-section-minw-m m:grid-cols-3
            l:min-w-section-minw-l
          "
        >
          {Skills.map((skill) => {
            return (
              <div
                key={skill.category}
                className="
                  flex h-fit w-full flex-col
                  gap-[20px]
                  divide-y divide-accent-light/70
                "
              >
                <div
                  className="
                    flex w-full flex-col pb-[4px] font-jetbrains uppercase
                    text-secondary-lightest
                    text-[clamp(11px,1.5vmin,16px)]
                  "
                >
                  <p>{skill.category}</p>
                </div>

                <div
                  className="
                    flex h-fit w-full flex-wrap
                    gap-x-[15px] gap-y-[10px]
                  "
                >
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