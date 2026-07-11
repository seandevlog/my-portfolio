import type { statusColors } from "@/types/status";

type StatusProps = {
  children: string;
  color: statusColors;
};

const colorTranslate = (color: statusColors): string => {
  switch (color) {
    case "orange":
      return "#f97316";
    case "green":
      return "#10b981";
    case "blue":
      return "#1841ff";
    case "red":
      return "#ff2d00";
  }
};

export default function Status({ children, color }: StatusProps) {
  const statusColor = colorTranslate(color);

  return (
    <div className="flex h-fit w-fit items-center gap-[10px] rounded-[12px] border border-[#ffffff10] bg-[#ffffff05] px-[12px] py-[4px]">
      <span
        style={{
          backgroundColor: statusColor,
          boxShadow: `0 0 12px ${statusColor}`,
        }}
        className="h-[10px] w-[10px] animate-pulse rounded-full"
      />

      <p className="font-jetbrains text-[12px] font-[400] text-secondary-lightest">
        {children.toUpperCase()}
      </p>
    </div>
  )
}