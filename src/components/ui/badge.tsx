import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border border-transparent font-sans whitespace-nowrap transition-all focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "bg-[#78716C] text-[#FAFAF9] border-[#78716C] px-3.5 py-1.5 text-[13px] font-medium",
        secondary: "bg-transparent text-[#57534E] border-[#D6D3D1] px-3.5 py-1.5 text-[13px] font-medium hover:bg-[#F5F5F4]",
        outline: "bg-transparent text-[#57534E] border-[#D6D3D1] px-3.5 py-1.5 text-[13px] font-medium hover:bg-[#F5F5F4]",
        success: "bg-[#F0FDF4] text-[#65A30D] border-[#BBF7D0] border px-3 py-1 text-[11px] font-semibold uppercase",
        warning: "bg-[#FEFCE8] text-[#CA8A04] border-[#FEF08A] border px-3 py-1 text-[11px] font-semibold uppercase",
        destructive: "bg-[#FEF2F2] text-[#DC2626] border-[#FECACA] border px-3 py-1 text-[11px] font-semibold uppercase",
        ghost: "hover:bg-[#F5F5F4] hover:text-[#1C1917]",
        link: "text-[#78716C] underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
