"use client";

// https://sdk.vercel.ai/docs/ai-sdk-rsc/migrating-to-ui
import { useChat } from "ai/react";
import {
  AIMessage,
  HumanInput,
  HumanMessage,
  GridBackground,
  Messages,
} from "@/components/adaptor";
import { Fragment, useEffect, useState } from "react";

// stream handler
const AIMessageProxy = ({ content }: { content: string }) => {
  const [text, setText] = useState("");

  // https://sdk.vercel.ai/docs/ai-sdk-ui/stream-protocol#text-stream-protocol
  useEffect(() => {
    console.log("content", content);
    const lines = content.split("\n");
    const newText = lines.reduce<string[]>((pre, acc) => {
      const next = acc.split(":");
      if (next[0] === "0") pre.push(next[1].slice(1, -1));
      return pre;
    }, []);
    console.log(newText);
    setText(newText.join(""));
  }, [content]);

  return <AIMessage className="mb-2">{text}</AIMessage>;
};

export default function Page() {
  // https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-chat
  const { messages, setInput, handleSubmit } = useChat({
    streamProtocol: "text",
  });

  return (
    <GridBackground>
      <div className="h-full">
        <div className="h-full pb-[56px] pt-2 px-2">
          <Messages>
            {messages.map(({ id, role, content }) => {
              return (
                <Fragment key={id}>
                  {role === "assistant" ? (
                    <AIMessageProxy content={content}></AIMessageProxy>
                  ) : (
                    <HumanMessage className="mb-2">{content}</HumanMessage>
                  )}
                </Fragment>
              );
            })}
          </Messages>
        </div>

        <form onSubmit={handleSubmit} className="w-full fixed bottom-0 p-2">
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
