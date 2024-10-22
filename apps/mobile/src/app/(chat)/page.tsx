"use client";

// https://sdk.vercel.ai/docs/ai-sdk-rsc/migrating-to-ui
import { useChat } from "ai/react";
import {
  AIMessage,
  HumanInput,
  HumanMessage,
  GridBackground,
} from "@/components/adaptor";
import { Fragment } from "react";

export default function Page() {
  const { messages, input, setInput, handleSubmit } = useChat({
    streamProtocol: "text", // https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot#controlling-the-response-stream
  });

  return (
    <GridBackground>
      <div className="flex flex-col min-h-screen p-4">
        <div className="flex-1">
          {messages.map(({ id, role, content }) => {
            return (
              <Fragment key={id}>
                {role === "assistant" ? (
                  <AIMessage className="mb-2">{content}</AIMessage>
                ) : (
                  <HumanMessage className="mb-2">{content}</HumanMessage>
                )}
              </Fragment>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="py-4">
          {/*
          onChange event prop will be applied to input inside of HumanInput component
        */}
          <HumanInput
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </form>
      </div>
    </GridBackground>
  );
}
