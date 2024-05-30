// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { createMockServer } from "./mock-server.mjs";
import { openaiChatCompletionChunks } from "./openai-chat.mjs";
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
  http.post("/mock/api/completion", async ({ request }) => {
    const data = new StreamData();
    const stream = OpenAIStream(await fetch(DEFAULT_TEST_URL), {
      onFinal() {
        data.close();
      },
    });
    const response = new StreamingTextResponse(stream, {}, data);

    return response;
  }),
  ...servers,
];
