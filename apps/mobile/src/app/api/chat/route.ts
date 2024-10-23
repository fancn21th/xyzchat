import { streamText, convertToCoreMessages } from "ai";
import { createAzure } from "@ai-sdk/azure";

const openai = createAzure({
  resourceName: process.env.AZURE_OPENAI_RESOURCE_NAME, // Azure resource name
  apiKey: process.env.AZURE_OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { messages } = await request.json();

  const coreMessages = convertToCoreMessages(messages);

  const result = await streamText({
    model: openai("gpt-4o"),
    system: "you are a friendly assistant!",
    messages: coreMessages,
    tools: {
      // tool definitions
    },
  });

  return result.toDataStreamResponse();
}
