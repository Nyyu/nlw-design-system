import React, { ButtonHTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "ghost"
  children: React.ReactNode
  className?: string
}

export default function Button({
  asChild = false,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const ButtonComponent = asChild ? Slot : "button"
  return (
    <ButtonComponent
      className={clsx(
        "btn",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-ghost": variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}
