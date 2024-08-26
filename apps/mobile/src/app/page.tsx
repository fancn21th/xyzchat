import { useCompletion } from "ai/react";

export default function Page() {
  const { completion, complete } = useCompletion({
    api: "/api/completion",
  });

  return (
    <div>
      <div
        onClick={async () => {
          await complete("Why is the sky blue?");
        }}
      >
        Generate
      </div>

      {completion}
    </div>
  );
}
