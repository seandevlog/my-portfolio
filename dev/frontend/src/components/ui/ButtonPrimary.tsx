import { Button } from "@mantine/core";

export default function ButtonPrimary({ children }: { children: string }) {
  return (
    <Button
      radius="xs"
      classNames={{
        root: "!h-auto !min-h-0 !py-[18px] !px-[20px] bg-secondary-base",
        inner: "!h-auto",
        label: "uppercase font-jetbrains text-button-xs m:text-button-m l:text-button-l xl:text-button-xl text-secondary-dark"
      }}
    >
      {children}
    </Button>
  )
}