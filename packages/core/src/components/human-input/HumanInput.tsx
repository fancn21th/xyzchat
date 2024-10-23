import { Input, type InputProps } from "../ui/input";
import { Button } from "../ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { cn } from "../lib/utils";

export interface HumanInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputProps {
  input: string;
}

export function HumanInput({
  input,
  className,
  ...props
}: HumanInputProps): JSX.Element {
  return (
    <div className={cn("flex w-full items-center space-x-2", className)}>
      <Input className="flex-1" {...props} value={input} />
      <Button type="submit" size="icon" disabled={input === ""}>
        <PaperPlaneIcon className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  );
}
