type StatusProps = {
  children: string;
  color: string;
}

export default function Status({ children, color }: StatusProps) {
  return (
    <div className="w-fit h-fit flex items-center gap-[10px] py-[4px] px-[12px] bg-[#ffffff05] border border-[#ffffff10] rounded-[12px]">
      <span className={`w-[10px] h-[10px] rounded-full ${color} shadow-[0_0_12px_rgba(249,115,22,0.8)] animate-pulse`}/>
      <p className="text-[12px] font-[400] font-jetbrains text-secondary-lightest">{children.toUpperCase()}</p>
    </div>
  )
}