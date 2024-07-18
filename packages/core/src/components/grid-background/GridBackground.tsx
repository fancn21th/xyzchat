import { ComponentProps } from "react";

export type GridBackgroundProps = ComponentProps<"div">;

export function GridBackground(props: GridBackgroundProps): JSX.Element {
  return <div className="" {...props} />;
}
