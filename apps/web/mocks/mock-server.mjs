import { HttpResponse, http, passthrough } from "msw";

export function createMockServer(testConfigs, passthroughUrls) {
  return [
    ...testConfigs.map(({ url, chunks, formatChunk, suffix }) =>
      http.all(url, createHandler(chunks, formatChunk, suffix))
    ),
    ...(passthroughUrls ?? []).map((url) => http.all(url, () => passthrough())),
  ];
}

function createHandler(chunks, formatChunk, suffix) {
  return async () => {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for (const chunk of chunks) {
            controller.enqueue(encoder.encode(formatChunk(chunk)));
          }

          if (suffix != null) {
            controller.enqueue(encoder.encode(suffix));
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
  };
}
