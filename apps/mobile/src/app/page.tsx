"use client";

import { useCompletion } from "ai/react";
import { ThemeProvider, HumanInput } from "@xyzchat/components";

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <ThemeProvider>
      <div className="w-screen h-screen p-8 flex justify-center items-center flex-rows">
        <div className="w-full h-full border rounded-lg relative">
          <div className="p-8">
            <div className="bg-slate-500 text-white p-8 rounded-lg">
              {completion}
            </div>
          </div>
          <div className="absolute bottom-0 w-full p-8">
            <form onSubmit={handleSubmit}>
              <HumanInput value={input} onChange={handleInputChange} />
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
