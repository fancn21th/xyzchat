import { Input, type InputProps } from "../ui/input";
import { Button } from "../ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export interface HumanInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputProps {}

export function HumanInput(props: HumanInputProps): JSX.Element {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input className="flex-1" {...props} />
      <Button type="submit" size="icon">
        <PaperPlaneIcon className="h-4 w-4" />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  );
}
