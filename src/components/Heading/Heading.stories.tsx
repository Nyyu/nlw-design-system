import { Meta, StoryObj } from "@storybook/react"
import Heading, { HeadingProps } from "./index"

export default {
  title: "Components/Heading",
  component: Heading,
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
} as Meta<HeadingProps>

export const Large: StoryObj<HeadingProps> = {
  args: {
    children: "Lorem ipsum.",
    size: "lg",
  },
}

export const Medium: StoryObj<HeadingProps> = {
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
}

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: "Lorem ipsum.",
    size: "sm",
  },
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    children: <h1>A heading using Heading tag</h1>,
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
