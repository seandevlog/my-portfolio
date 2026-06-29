import X from "@/assets/X";
import Status from "../ui/Status";
import ButtonPrimary from "../ui/ButtonPrimary";

export default function HomeHero() {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-[24px] px-section-x-xs">
      <Status color="bg-[#10b981]">system_status: active</Status>
      <span className="w-full s:w-[550px] m:w-[768px] l:w-[959px] max-w-[360px] s:max-w-none font-outfit text-h1-xs s:text-h1-s m:text-h1-m l:text-h1-l justify-center text-center uppercase">
        <p className="inline-flex items-center gap-2  text-secondary-lighter">backend <X/> data</p>
        <p className="text-secondary-lightest">for secure, structured systems</p>
      </span>
      <span className="w-full s:w-[530px] m:w-[700px] xl:w-[800px] max-w-[320px] s:max-w-none font-outfit text-p1-xs s:text-p1-s m:text-p1-m l:text-p1-l xl:text-p1-xl text-center text-pretty text-secondary-lightest">
        <p>I turn practical ideas into secure web platforms, connecting clean APIs, reliable data flows, and thoughtful interfaces into systems people can trust.</p>
      </span>
      <ButtonPrimary>view_systems</ButtonPrimary>
    </div>
  )
}