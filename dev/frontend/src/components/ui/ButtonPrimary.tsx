import { Button } from "@mantine/core";

export default function ButtonPrimary({ children }: { children: string }) {
  return (
    <Button

      radius="xs"
      classNames={{
        root: "px-[20px] py-[18px] bg-secondary-base",
        label: "uppercase font-jetbrains text-[12px] text-secondary-dark"
      }}
    >
      {children}
    </Button>
  )
}