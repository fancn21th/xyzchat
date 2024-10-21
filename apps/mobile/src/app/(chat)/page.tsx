"use client";

// https://sdk.vercel.ai/docs/ai-sdk-rsc/migrating-to-ui
import { useChat } from "ai/react";
import { AIMessage, HumanInput, HumanMessage } from "@/components/adaptor";
import { Fragment } from "react";

export default function Page() {
  const { messages, input, setInput, handleSubmit } = useChat({
    streamProtocol: "text", // https://sdk.vercel.ai/docs/ai-sdk-ui/chatbot#controlling-the-response-stream
  });

  return (
    <div>
      {messages.map(({ id, role, content }) => {
        return (
          <Fragment key={id}>
            {role === "assistant" ? (
              <AIMessage>{content}</AIMessage>
            ) : (
              <HumanMessage>{content}</HumanMessage>
            )}
          </Fragment>
        );
      })}

      <form onSubmit={handleSubmit}>
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
  );
}
