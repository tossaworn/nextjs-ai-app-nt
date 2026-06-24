import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full resize-y rounded-none border border-[#D6D3D1] bg-[#FAFAF9] px-4 py-3 text-[15px] font-normal text-[#1C1917] placeholder:text-[#A8A29E] transition-all outline-none",
        "hover:border-[#78716C]",
        "focus-visible:border-[#78716C] focus-visible:ring-0 focus-visible:outline-none",
        "aria-invalid:border-[#DC2626] aria-invalid:focus-visible:border-[#DC2626]",
        "disabled:bg-[#F5F5F4] disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
