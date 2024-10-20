import type { Meta, StoryObj } from "@storybook/react";
import { HumanInput } from "@/components";

const meta: Meta = {
  title: "Heros/HumanInput",
  component: HumanInput,
  args: {
    type: "text",
    placeholder: "发消息 ...",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof HumanInput>;

export const Primary: Story = {
  args: {},
};
