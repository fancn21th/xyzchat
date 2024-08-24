import type { Meta, StoryObj } from "@storybook/react";
import { AIMessage } from "@xyzchat/components";

const meta: Meta = {
  title: "Components/AIMessage",
  component: AIMessage,
  args: {
    children: "我是一个机器人",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof AIMessage>;

export const Primary: Story = {
  args: {},
};
