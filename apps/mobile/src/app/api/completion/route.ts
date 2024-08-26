import { ChatOpenAI } from "@langchain/openai";
import { HttpsProxyAgent } from "https-proxy-agent";
import { LangChainAdapter } from "ai";

export const maxDuration = 60;

const proxyUrl = "http://localhost:7892";
const proxyAgent = new HttpsProxyAgent(proxyUrl);

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const model = new ChatOpenAI({
    model: "gpt-4-turbo",
    temperature: 0,
    configuration: {
      httpAgent: proxyAgent, // Use httpAgent or httpsAgent based on your proxy protocol
    },
  });

  const stream = await model.stream(prompt);

  return LangChainAdapter.toDataStreamResponse(stream);
}
