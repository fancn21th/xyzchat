import { ComponentProps } from "react";

import { Button } from "../ui/button";

export type ChatProps = ComponentProps<"button">;

export function Chat(props: ChatProps): JSX.Element {
  return <Button {...props}>Good Button</Button>;
}
