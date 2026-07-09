import { Button as ButtonMantine } from "@mantine/core";

type ButtonProps = {
  children: React.ReactNode;
  mode: "primary" | "secondary"
}

export default function Button({ children, mode }: ButtonProps) {
  return (
    <ButtonMantine
      radius="xs"
      styles={{
        root: {
          background: 
            mode === "primary"
            ? "#F97316"
            : mode === "secondary"
            ? "#1A2A44"
            : ""
        },
        label: {
          color:
            mode === "primary"
            ? "#582200"
            : mode === "secondary"
            ? "#e0e3e5"
            : "",
          fill:
            mode === "primary"
            ? "#582200"
            : mode === "secondary"
            ? "#e0e3e5"
            : ""
        }
      }}
      classNames={{
        root: "!h-auto !min-h-0 !py-[18px] !px-[20px] !rounded-[8px] !border !border-[#ffffff]/10",
        inner: "!h-auto",
        label: "uppercase font-jetbrains text-button-xs m:text-button-m l:text-button-l xl:text-button-xl text-secondary-dark"
      }}
    >
      {children}
    </ButtonMantine>
  )
}