import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import React, { InputHTMLAttributes } from "react"

export interface RootProps {
  children: React.ReactNode
}

function Root({ children }: RootProps) {
  return (
    <label className="rounded bg-gray-800 w-full h-12 outline-none focus-within:ring-2 ring-offset-1 ring-offset-transparent ring-cyan-300 py-4 px-3 flex items-center gap-3">
      {children}
    </label>
  )
}

export interface IconProps {
  children: React.ReactNode
}

function Icon({ children }: IconProps) {
  return (
    <Slot className="h-6 w-6 text-gray-400">
      {children}
    </Slot>
  )
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  variant: "primary" | "secondary" | "ghost"
}

function Body({ variant, ...props }: InputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  )
}

export const Input = {
  Root,
  Icon,
  Body,
}
