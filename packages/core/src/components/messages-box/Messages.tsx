import { useScrollAnchor } from "../hooks/";
import { cn } from "../lib/utils";

export interface MessagesProps extends React.ComponentProps<"div"> {
  className?: string;
  children?: React.ReactNode;
}

export function Messages({ className, children }: MessagesProps) {
  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  return (
    <>
      <div className="" onClick={scrollToBottom}>
        Scroll Status: {isAtBottom ? "bottom" : "not bottom"}
      </div>
      <div className="w-full h-[400px] overflow-y-auto" ref={scrollRef}>
        <div className={cn("border", className)} ref={messagesRef}>
          {children}
          <div className="w-full h-px" ref={visibilityRef} />
        </div>
      </div>
    </>
  );
}
