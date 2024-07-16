import type { Meta, StoryObj } from "@storybook/react";
import { Chat } from "@repo/core";

const meta: Meta = {
  title: "Components/Chat",
  component: Chat,
  args: {
    children: "Chat",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

// this is a sb feature demo only
export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: "dark",
    },
  },
};
// this is a sb feature demo only
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
