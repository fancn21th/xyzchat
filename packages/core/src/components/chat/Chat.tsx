import { ComponentProps } from "react";

import { Button, type ButtonProps } from "../ui/button";

export type ChatProps = ComponentProps<"button"> & ButtonProps;

export function Chat(props: ChatProps): JSX.Element {
  return <Button {...props} />;
}
