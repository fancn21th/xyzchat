import type { Meta, StoryObj } from "@storybook/react";
import { Chat } from "@repo/core";

const meta = {
  title: "Components/Button",
  component: Chat,
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {
  args: {},
};
