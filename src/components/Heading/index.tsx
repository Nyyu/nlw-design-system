import React from "react"
import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"

export interface HeadingProps {
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  className?: string
}

export default function Heading({
  children,
  size = "md",
  asChild = false,
  className,
}: HeadingProps) {
  const HeadingComponent = asChild ? Slot : "h2"

  return (
    <HeadingComponent
      className={clsx(
        "font-sans font-bold text-gray-100",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </HeadingComponent>
  )
}
