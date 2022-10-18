import React from "react"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

export interface ButtonProps {
  asChild?: boolean
  type?: "primary" | "secondary" | "ghost"
  children: React.ReactNode
}

export default function Button({
  asChild = false,
  type = "primary",
  children,
}: ButtonProps) {
  const ButtonComponent = asChild ? Slot : "button"
  return (
    <ButtonComponent
      className={clsx("btn", {
        "btn-primary": type === "primary",
        "btn-secondary": type === "secondary",
        "btn-ghost": type === "ghost",
      })}
    >
      {children}
    </ButtonComponent>
  )
}
