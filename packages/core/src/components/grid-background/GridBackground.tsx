import { ComponentProps } from "react";

export type GridBackgroundProps = ComponentProps<"div">;

export function GridBackground(props: GridBackgroundProps): JSX.Element {
  return (
    <div
      className="bg-grid-pattern bg-[length:8px_8px] pointer-events-none"
      {...props}
    />
  );
}
