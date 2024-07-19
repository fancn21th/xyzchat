import { ComponentProps } from "react";

export type GridBackgroundProps = ComponentProps<"div">;

export function GridBackground(props: GridBackgroundProps): JSX.Element {
  return (
    <div
      className="xyz-grid-background bg-[length:8px_8px] pointer-events-none"
      {...props}
    />
  );
}
