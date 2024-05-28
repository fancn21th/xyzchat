// src/mocks/handlers.js
import { http, graphql, HttpResponse } from "msw";

function prepareStreamResponse({
  content,
  finish_reason = "stop",
  usage = {
    prompt_tokens: 10,
    total_tokens: 372,
    completion_tokens: 362,
  },
  logprobs = null,
}) {
  return [
    ...content.map((text) => {
      return (
        `data: {"id":"cmpl-96c64EdfhOw8pjFFgVpLuT8k2MtdT","object":"text_completion","created":1711363440,` +
        `"choices":[{"text":"${text}","index":0,"logprobs":null,"finish_reason":null}],"model":"gpt-3.5-turbo-instruct"}\n\n`
      );
    }),
    `data: {"id":"cmpl-96c3yLQE1TtZCd6n6OILVmzev8M8H","object":"text_completion","created":1711363310,` +
      `"choices":[{"text":"","index":0,"logprobs":${JSON.stringify(
        logprobs
      )},"finish_reason":"${finish_reason}"}],"model":"gpt-3.5-turbo-instruct"}\n\n`,
    `data: {"id":"cmpl-96c3yLQE1TtZCd6n6OILVmzev8M8H","object":"text_completion","created":1711363310,` +
      `"model":"gpt-3.5-turbo-instruct","usage":${JSON.stringify(
        usage
      )},"choices":[]}\n\n`,
    "data: [DONE]\n\n",
  ];
}

const TEST_LOGPROBS = {
  tokens: [" ever", " after", ".\n\n", "The", " end", "."],
  token_logprobs: [
    -0.0664508, -0.014520033, -1.3820221, -0.7890417, -0.5323165, -0.10247037,
  ],
  top_logprobs: [
    {
      " ever": -0.0664508,
    },
    {
      " after": -0.014520033,
    },
    {
      ".\n\n": -1.3820221,
    },
    {
      The: -0.7890417,
    },
    {
      " end": -0.5323165,
    },
    {
      ".": -0.10247037,
    },
  ],
};

export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json({ firstName: "alex" });
  }),
  http.post("/mock/api/completion", ({ request }) => {
    const chunks = prepareStreamResponse({
      content: ["Hello", ", ", "World!"],
      finish_reason: "stop",
      usage: {
        prompt_tokens: 10,
        total_tokens: 372,
        completion_tokens: 362,
      },
      logprobs: TEST_LOGPROBS,
    });
    const encoder = new TextEncoder();
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
        responseHeaders: {
          "test-header": "test-value",
        },
      },
    });
  }),
];
