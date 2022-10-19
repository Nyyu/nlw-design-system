import { ReactNode } from "react"
import * as CheckboxPrimite from "@radix-ui/react-checkbox"

export interface CheckboxProps
  extends CheckboxPrimite.CheckboxProps {
  children: ReactNode
  isChecked?: boolean
}

export default function Checkbox({
  children,
  isChecked,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimite.Root
      className="bg-gray-800 w-6 h-6 p-1 rounded flex items-center justify-center"
      checked={isChecked}
      {...props}
    >
      <CheckboxPrimite.Indicator
        asChild
        className="text-cyan-600"
      >
        {children}
      </CheckboxPrimite.Indicator>
    </CheckboxPrimite.Root>
  )
}
