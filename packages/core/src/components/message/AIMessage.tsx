export interface AIMessageProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AIMessage({ children }: AIMessageProps): JSX.Element {
  return (
    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
      {children}
    </div>
  );
}
