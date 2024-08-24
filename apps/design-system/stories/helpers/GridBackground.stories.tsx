import type { Meta, StoryObj } from "@storybook/react";
import { GridBackground } from "@xyzchat/components";

const meta: Meta = {
  title: "Helpers/GridBackground",
  component: GridBackground,
  args: {
    children: (
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "1px dashed black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          80 X 80
        </div>
        <div
          style={{
            width: "160px",
            height: "160px",
            position: "relative",
            left: "80px",
            border: "1px dashed black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          160 X 160
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            position: "relative",
            left: "240px",
            border: "1px dashed black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          48 X 48
        </div>
      </div>
    ),
  },
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof GridBackground>;

export const Primary: Story = {
  args: {},
};
