// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { createMockServer } from "./mock-server";
import { openaiChatCompletionChunks } from "./openai-chat";
import { StreamData, StreamingTextResponse, OpenAIStream } from "ai";

export const DEFAULT_TEST_URL = "http://localhost:4321/";

const servers = createMockServer([
  {
    url: DEFAULT_TEST_URL,
    chunks: openaiChatCompletionChunks,
    formatChunk: (chunk) => `data: ${JSON.stringify(chunk)}\n\n`,
    suffix: "data: [DONE]",
  },
]);

export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json({ firstName: "alex" });
  }),
  // the mock api below is for AI SDK UI component sending a request to the OpenAI API
  // http.post("/mock/chat/completions", async () => {
  //   const data = new StreamData();
  //   const stream = OpenAIStream(await fetch(DEFAULT_TEST_URL), {
  //     onFinal() {
  //       data.close();
  //     },
  //   });
  //   const response = new StreamingTextResponse(stream, {}, data);
  //   return response;
  // }),
  // the mock api below is for Custom Provider sending a request to the OpenAI API
  http.post("/mock/chat/completions", async () => {
    const encoder = new TextEncoder();
    const content = [
      "Hello",
      ", ",
      "world!",
      " You",
      " are",
      " calling",
      " a",
      " custom",
      " ai",
      " api",
    ];
    const chunks = [
      `data:  {"id":"6e2cd91750904b7092f49bdca9083de1","object":"chat.completion.chunk",` +
        `"created":1711097175,"model":"mistral-small-latest","choices":[{"index":0,` +
        `"delta":{"role":"assistant","content":""},"finish_reason":null,"logprobs":null}]}\n\n`,
      ...content.map((text) => {
        return (
          `data:  {"id":"6e2cd91750904b7092f49bdca9083de1","object":"chat.completion.chunk",` +
          `"created":1711097175,"model":"mistral-small-latest","choices":[{"index":0,` +
          `"delta":{"role":"assistant","content":"${text}"},"finish_reason":null,"logprobs":null}]}\n\n`
        );
      }),
      `data:  {"id":"6e2cd91750904b7092f49bdca9083de1","object":"chat.completion.chunk",` +
        `"created":1711097175,"model":"mistral-small-latest","choices":[{"index":0,` +
        `"delta":{"content":""},"finish_reason":"stop","logprobs":null}],` +
        `"usage":{"prompt_tokens":4,"total_tokens":36,"completion_tokens":32}}\n\n`,
      `data: [DONE]\n\n`,
    ];
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
        } finally {
          controller.close();
        }
      },
    });

    return new HttpResponse(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }),
  ...servers,
];
