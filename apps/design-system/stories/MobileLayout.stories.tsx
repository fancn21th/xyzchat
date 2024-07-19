import type { Meta, StoryObj } from "@storybook/react";
import { MobileLayout } from "@repo/core";

const meta: Meta = {
  title: "Helpers/MobileLayout",
  component: MobileLayout,
  args: {
    children: [
      <MobileLayout.Header>header</MobileLayout.Header>,
      <MobileLayout.Body>body</MobileLayout.Body>,
      <MobileLayout.Footer>footer</MobileLayout.Footer>,
    ],
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof MobileLayout>;

export const Primary: Story = {
  args: {},
};
