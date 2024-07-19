import type { Meta, StoryObj } from "@storybook/react";
import { MobileLayout, GridBackground } from "@repo/core";

const meta: Meta = {
  title: "Patterns/MobileLayout",
  component: MobileLayout,
  args: {
    children: [
      <MobileLayout.Header>header</MobileLayout.Header>,
      <MobileLayout.Body>body</MobileLayout.Body>,
      <MobileLayout.Footer>footer</MobileLayout.Footer>,
    ],
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <GridBackground>
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Story />
        </div>
      </GridBackground>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof MobileLayout>;

export const Primary: Story = {
  args: {},
};
