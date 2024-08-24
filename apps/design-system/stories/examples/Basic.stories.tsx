import type { Meta, StoryObj } from "@storybook/react";
import {
  MobileLayout,
  GridBackground,
  HumanInput,
  AIMessage,
  HumanMessage,
} from "@xyzchat/components";

const meta: Meta = {
  title: "Examples/Basic",
  component: MobileLayout,
  args: {
    children: [
      <MobileLayout.Header
        style={{
          width: "100vw",
          height: "48px",
          borderBottom: "1px solid black",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Apps In Chat
      </MobileLayout.Header>,
      <MobileLayout.Body
        className="space-y-4"
        style={{
          width: "100vw",
          height: "100vh",
          paddingTop: "56px",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <AIMessage>我是一个机器人</AIMessage>
        <HumanMessage>我是一个人类</HumanMessage>
      </MobileLayout.Body>,
      <MobileLayout.Footer
        style={{
          width: "100vw",
          padding: "8px",
          textAlign: "center",
          borderTop: "1px solid black",
        }}
      >
        <HumanInput />
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
