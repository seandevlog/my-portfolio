type CookieProps = {
  children: React.ReactElement<HTMLParagraphElement>;
  mode: "dark" | "light";
}

export default function Cookie({ children, mode }: CookieProps) {
  return (
    <span 
      style={{
        "background":
          mode === "dark"
            ? "#101415"
          : mode === "light"
            ? "#ffffff"
          : "",
        "color":
          mode === "dark"
            ? "#e0e3e5"
          : mode === "light"
            ? "#b7c7e8"
          : "",
      }}
      className="p-[8px] flex items-center justify-center text-[12px] font-jetbrains border border-[#ffffff]/10 rounded-[4px]"
    >
      {children}
    </span>
  )  
}