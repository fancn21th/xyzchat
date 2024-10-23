import { useScrollAnchor } from "../hooks/";
import { cn } from "../lib/utils";

export interface MessagesProps extends React.ComponentProps<"div"> {
  className?: string;
  children?: React.ReactNode;
}

function IconArrowDown({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

export function Messages({ className, children }: MessagesProps) {
  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor();

  return (
    <div className="w-full h-full overflow-y-auto relative" ref={scrollRef}>
      <div
        className={cn(
          isAtBottom ? "opacity-0" : "opacity-100",
          "absolute right-4 bottom-4 z-10 bg-white transition-opacity duration-300 cursor-pointer w-4 h-4 rounded-full border border-black flex items-center"
        )}
        onClick={scrollToBottom}
      >
        <IconArrowDown />
      </div>
      <div className={cn("", className)} ref={messagesRef}>
        {children}
        <div className="w-full h-px" ref={visibilityRef} />
      </div>
    </div>
  );
}
