import Status from "../ui/Status";
import HomeAboutPortrait from "../ui/HomeAboutPortrait";

export default function HomeAbout() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-section-x-xs py-section-y-xs s:px-section-x-s s:py-section-y-s m:px-section-x-m m:py-section-y-m l:px-section-x-l l:py-section-y-l xl:py-section-y-xl">
      <div className="grid w-full min-w-section-minw-xs gap-[24px] s:min-w-section-minw-s m:min-w-section-minw-m m:grid-cols-[minmax(0,1fr)_minmax(240px,38%)] m:items-stretch l:min-w-section-minw-l">
        <div className="flex w-full min-w-0 flex-col gap-[24px]">
          <Status color="blue">developer_profile</Status>

          <div className="flex w-full flex-col gap-[32px]">
            <h2 className="text-h2-xs text-secondary-lightest s:text-h2-s m:text-h2-m l:text-h2-l">
              As a full-stack developer, I build practical web applications
              with{" "}
              <span className="text-secondary-lighter">clean code</span>,
              structured data, reliable backend logic, and user interfaces
              designed for real operational workflows.
            </h2>

            <p className="text-p1-xs text-secondary-lightest s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl">
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