import type { Meta, StoryObj } from "@storybook/react";
import { MobileLayout, GridBackground } from "@repo/core";

const meta: Meta = {
  title: "Patterns/MobileLayout",
  component: MobileLayout,
  args: {
    children: [
      <MobileLayout.Header
        style={{
          width: "100vw",
          height: "48px",
          backgroundColor: "pink",
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        Header
      </MobileLayout.Header>,
      <MobileLayout.Body
        style={{
          width: "100vw",
          height: "100vh",
          opacity: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Body
      </MobileLayout.Body>,
      <MobileLayout.Footer
        style={{
          width: "100vw",
          height: "48px",
          backgroundColor: "pink",
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        Footer
      </MobileLayout.Footer>,
    ],
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <GridBackground>
        <Story />
      </GridBackground>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof MobileLayout>;

export const Primary: Story = {
  args: {},
};
