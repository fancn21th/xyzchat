import type { Meta, StoryObj } from "@storybook/react";
import { Messages, HumanMessage, AIMessage } from "@/components";
import { Fragment } from "react";

const meta: Meta = {
  title: "Patterns/Messages",
  component: Messages,
  args: {
    children: (
      <>
        {new Array(30).fill(null).map((_, index) => (
          <Fragment key={index}>
            {index % 2 === 0 ? (
              <HumanMessage>I am Human {index}</HumanMessage>
            ) : (
              <AIMessage>I am AI {index}</AIMessage>
            )}
          </Fragment>
        ))}
      </>
    ),
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="border border-gray-500 overflow-hidden h-[calc(100vh_-_30px)]">
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
