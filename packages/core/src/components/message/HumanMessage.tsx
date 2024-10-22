import { cn } from "../lib/utils";

export interface HumanMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function HumanMessage({
  className,
  children,
}: HumanMessageProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted",
        className
      )}
    >
      {children}
    </div>
  );
}
