import { ZodSchema } from "zod";
import {
  ResponseHandler,
  ParseResult,
  extractResponseHeaders,
  safeParseJSON,
} from "@ai-sdk/provider-utils";
import { EmptyResponseBodyError } from "@ai-sdk/provider";
import {
  EventSourceParserStream,
  ParsedEvent,
} from "eventsource-parser/stream";

export const createEventSourceResponseHandler =
  <T>(
    chunkSchema: ZodSchema<T>
  ): ResponseHandler<ReadableStream<ParseResult<T>>> =>
  async ({ response }: { response: Response }) => {
    const responseHeaders = extractResponseHeaders(response);

    if (response.body == null) {
      throw new EmptyResponseBodyError({});
    }

    return {
      responseHeaders,
      value: response.body
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new EventSourceParserStream())
        .pipeThrough(
          new TransformStream<ParsedEvent, ParseResult<T>>({
            transform({ data }, controller) {
              // ignore the 'DONE' event that e.g. OpenAI sends:
              if (data === "[DONE]") {
                return;
              }

              controller.enqueue(
                safeParseJSON({
                  text: data,
                  schema: chunkSchema,
                })
              );
            },
          })
        ),
    };
  };
