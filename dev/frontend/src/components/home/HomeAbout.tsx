import Status from "../ui/Status";
import HomeAboutPortrait from "../ui/HomeAboutPortrait";

export default function HomeAbout() {
  return (
    <section
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
          grid h-full w-full min-w-section-minw-xs gap-[clamp(20px,4vmin,40px)]
          s:min-w-section-minw-s
          m:min-w-section-minw-m m:grid-cols-[minmax(0,1fr)_minmax(220px,38%)] m:items-center
          l:min-w-section-minw-l
        "
      >
        <div className="flex min-h-0 w-full min-w-0 flex-col justify-center gap-[clamp(16px,3vmin,24px)]">
          <Status color="blue">developer_profile</Status>

          <div className="flex min-h-0 w-full flex-col gap-[clamp(20px,4vmin,32px)]">
            <h2
              className="
                text-secondary-lightest
                text-[clamp(24px,5vmin,50px)]
                leading-[1.05]
              "
            >
              As a full-stack developer, I build practical web applications
              with{" "}
              <span className="text-secondary-lighter">clean code</span>,
              structured data, reliable backend logic, and user interfaces
              designed for real operational workflows.
            </h2>

            <p
              className="
                max-w-[720px] text-secondary-lightest
                text-[clamp(14px,2vmin,22px)]
                leading-[1.45]
              "
            >
              My name is <span className="text-accent-light">Sean</span>. I
              build with patience and intention, focusing on the balance between
              technical precision, usability, security, and the real-world needs
              behind every system.
            </p>
          </div>
        </div>

        <HomeAboutPortrait />
      </div>
    </section>
  );
}