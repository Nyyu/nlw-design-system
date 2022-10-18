import { Meta, StoryObj } from "@storybook/react"
import { Check } from "phosphor-react"
import Checkbox, { CheckboxProps } from "."
import Text from "../Text"

export default {
  component: Checkbox,
  args: {
    children: <Check />,
  },
  argTypes: {
    isChecked: {
      options: [false, true],
      control: {
        type: "boolean",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <label className="flex gap-2 items-center">
          {Story()}
          <Text size="sm">Lembre-se de mim</Text>
        </label>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Unchecked: StoryObj<CheckboxProps> = {}
export const Checked: StoryObj<CheckboxProps> = {
  args: {
    children: <Check />,
    isChecked: true,
  },
}
