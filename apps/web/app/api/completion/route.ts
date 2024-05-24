import { ChatOpenAI } from "@langchain/openai";
import { LangChainAdapter, StreamingTextResponse } from "ai";
// import { HttpsProxyAgent } from "https-proxy-agent";

// const proxyUrl = process.env.PROXY_URL || ""; // PROXY_URL=http://127.0.0.1:1234 defined in .env file
// const proxyAgent = new HttpsProxyAgent(proxyUrl);

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  console.log("Prompt:", prompt);

  const model = new ChatOpenAI({
    model: "gpt-3.5-turbo-0125",
    temperature: 0,
    configuration: {
      baseURL: "http://127.0.0.1:3000/v2/",
      // httpAgent: proxyAgent, // Use httpAgent or httpsAgent based on your proxy protocol
    },
  });

  const stream = await model.stream(prompt);

  const aiStream = LangChainAdapter.toAIStream(stream);

  return new StreamingTextResponse(aiStream);
}
