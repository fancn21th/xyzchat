import type { Meta, StoryObj } from "@storybook/react";
import { HumanMessage } from "@/components";

const meta: Meta = {
  title: "Heros/HumanMessage",
  component: HumanMessage,
  args: {
    children: "我是一个人类",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof HumanMessage>;

export const Primary: Story = {
  args: {},
};
