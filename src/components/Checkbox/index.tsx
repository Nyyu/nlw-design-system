import { ReactNode } from "react"
import * as Checkbox from "@radix-ui/react-checkbox"

export interface CheckboxProps {
  children: ReactNode
  isChecked: boolean
}

export default function index({
  children,
  isChecked,
}: CheckboxProps) {
  return (
    <Checkbox.Root
      className="bg-gray-800 w-6 h-6 p-1 rounded flex items-center justify-center"
      checked={isChecked}
    >
      <Checkbox.Indicator asChild className="text-cyan-600">
        {children}
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}
