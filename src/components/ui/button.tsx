import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent font-sans font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#78716C] text-[#FAFAF9] border-[#78716C] hover:bg-[#57534E] active:bg-[#44403C]",
        outline: "bg-transparent text-[#78716C] border-[#D6D3D1] hover:bg-[#F5F5F4] active:bg-[#E7E5E4]",
        secondary: "bg-transparent text-[#78716C] border-[#D6D3D1] hover:bg-[#F5F5F4] active:bg-[#E7E5E4]",
        ghost: "bg-transparent text-[#78716C] border-transparent hover:bg-[#F5F5F4] active:bg-[#E7E5E4]",
        destructive: "bg-[#DC2626] text-[#FAFAF9] border-[#DC2626] hover:bg-[#B91C1C] active:bg-[#991B1B]",
        link: "text-[#78716C] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 py-3 px-6 text-[15px] gap-1.5",
        xs: "h-8 py-1 px-3 text-[13px] gap-1 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 py-2 px-4 text-[13px] gap-1",
        lg: "h-14 py-4 px-9 text-[17px] gap-1.5",
        icon: "size-12",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
