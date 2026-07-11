"use client"

import { Button } from "@mantine/core"
import { ArrowUpLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Back() {
  const router = useRouter();

  return (
    <div className="w-full flex items-center min-w-section-minw-xs">
      <Button
        leftSection={
          <ArrowUpLeft className="stroke-secondary-lightest"/>
        }
        styles={{
          "root": {
            background: "none",
            padding: "0"
          }
        }}
        classNames={{
          "label": "!text-secondary-lightest !text-[16px] uppercase"
        }}
        onClick={() => router.push("/")}
      >
        Back
      </Button>
    </div>
  )
}