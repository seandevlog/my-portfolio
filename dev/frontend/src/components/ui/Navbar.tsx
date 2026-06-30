import { SquareTerminal } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-fit sticky top-0 flex justify-center items-center px-[24px] py-[15px] bg-black-base border border-[#ffffff10]">
      <div className="w-full h-fit min-w-section-minw-xs flex flex-wrap justify-between gap-x-[20px] gap-y-[15px]">
        <div className="w-fit h-fit flex items-center gap-[5px] ">
          <SquareTerminal className="h-[20px] w-[20px] stroke-secondary-lighter"/>
          <p className="font-jetbrains tracking-tighter uppercase text-[16px] text-secondary-lighter">sean_delos_santos_os</p>
        </div>
        <ul className="flex h-fit w-full basis-full items-center justify-between list-none text-[14px] text-secondary-lighter s:w-fit s:basis-auto s:justify-start s:gap-[18px]">
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Resume</li>
          <li>Mail</li>
        </ul>
      </div>
    </div>
  )
}