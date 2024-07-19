export interface HumanMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function HumanMessage({ children }: HumanMessageProps): JSX.Element {
  return (
    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
      {children}
    </div>
  );
}
