import type { Meta, StoryObj } from "@storybook/react";
import { Messages } from "@/components";

const meta: Meta = {
  title: "Patterns/Messages",
  component: Messages,
  args: {
    children: (
      <>
        {new Array(30).fill(null).map((_, index) => (
          <div key={index} className="my-4 border border-red-400">
            {index}
          </div>
        ))}
      </>
    ),
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="overflow-y-hidden">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Messages>;

export const Primary: Story = {
  args: {},
};
