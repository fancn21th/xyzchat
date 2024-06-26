"use client";

import { useCompletion } from "ai/react";

export default function Page() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/mock/api/completion",
    onResponse: (response) => {
      console.log(response);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="prompt"
        value={input}
        onChange={handleInputChange}
        id="input"
      />
      <button type="submit">Submit</button>
      <div>{completion}</div>
    </form>
  );
}
