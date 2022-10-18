import { Meta, StoryObj } from "@storybook/react"
import { Envelope } from "phosphor-react"

import type { IconProps, InputProps, RootProps } from "."
import { Input } from "."

export default {
  component: Input.Root,
  args: {
    children: (
      <>
        <Input.Icon>
          <Envelope />
        </Input.Icon>
        <Input.Body
          variant="primary"
          placeholder="Lorem ipsum."
        />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<RootProps>

export const Default: StoryObj<RootProps> = {}
export const WithoutIcon: StoryObj<RootProps> = {
  args: {
    children: (
      <Input.Body
        variant="primary"
        placeholder="Lorem ipsum."
      />
    ),
  },
}
