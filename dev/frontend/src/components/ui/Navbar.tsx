import { SquareTerminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] flex h-fit w-full items-center justify-center border border-[#ffffff10] bg-black-base px-[24px] py-[15px]">
      <div className="flex h-fit w-full min-w-section-minw-xs flex-wrap justify-between gap-x-[20px] gap-y-[15px]">
        <div className="flex h-fit w-fit items-center gap-[5px]">
          <SquareTerminal className="h-[20px] w-[20px] stroke-secondary-lighter" />

          <p className="font-jetbrains text-[16px] uppercase tracking-tighter text-secondary-lighter">
            sean_delos_santos_os
          </p>
        </div>

        <ul className="flex h-fit w-full basis-full list-none items-center justify-between text-[14px] text-secondary-lighter s:w-fit s:basis-auto s:justify-start s:gap-[18px]">
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Resume</li>
          <li>Mail</li>
        </ul>
      </div>
    </header>
  );
}