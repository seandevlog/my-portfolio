import ExperienceList from "../ui/ExperienceList";
import Status from "../ui/Status";
import Experiences from "@/data/experience";

export default function HomeExperience() {
  return (
    <section
      className="
        flex h-fit w-full flex-col items-center justify-center
        gap-[clamp(28px,4vmin,40px)]
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
          gap-[clamp(10px,2vmin,12px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m
          l:min-w-section-minw-l
        "
      >
        <Status color="orange">system_status: experience</Status>

        <h2
          className="
            text-accent-light
            text-[clamp(24px,5vmin,50px)]
            leading-[1.05]
          "
        >
          Professional Journey
        </h2>
      </div>

      <ExperienceList experiences={Experiences} />
    </section>
  );
}