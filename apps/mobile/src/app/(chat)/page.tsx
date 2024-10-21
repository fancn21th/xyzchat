import { AIMessage } from "@/components/adaptor";

export const metadata = {
  title: "xyz chat | chat",
};

export default async function IndexPage() {
  return (
    <>
      <AIMessage>hello world!</AIMessage>
    </>
  );
}
