import type { Meta, StoryObj } from "@storybook/react";
import { Chat, ThemeProvider } from "@repo/core";

const meta: Meta = {
  title: "Components/Chat",
  component: Chat,
  args: {
    children: "Chat",
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Chat>;

export const Primary: Story = {
  args: {},
};
