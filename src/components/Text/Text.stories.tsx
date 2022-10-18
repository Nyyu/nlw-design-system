import { Meta, StoryObj } from "@storybook/react"
import Text, { TextProps } from "./index"

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>

export const Large: StoryObj<TextProps> = {
  args: {
    children: "Lorem ipsum.",
    size: "lg",
  },
}

export const Medium: StoryObj<TextProps> = {
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
}

export const Small: StoryObj<TextProps> = {
  args: {
    children: "Lorem ipsum.",
    size: "sm",
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    children: (
      <p>
        A paragraph using a Paragraph tag instead of a span
      </p>
    ),
    size: "lg",
    asChild: true,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
