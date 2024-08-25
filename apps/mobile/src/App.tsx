import { ThemeProvider } from "@xyzchat/components";
import { useCompletion } from "ai/react";

function App() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/mock/api/completion",
    onResponse: () => {},
  });

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
