import React from "react";
import { ComponentProps } from "react";

/**
 *  this component is made with compound components pattern
 *
 *  you could learn it from https://www.patterns.dev/react/compound-pattern/
 */

const MobileLayoutContext = React.createContext<MobileLayoutHeaderProps | null>(
  null
);

export type MobileLayoutProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type MobileLayoutHeaderProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type MobileLayoutBodyProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type MobileLayoutFooterProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

function Header({ children, ...rest }: MobileLayoutHeaderProps) {
  return (
    <div className="" {...rest}>
      {children}
    </div>
  );
}

function Body({ children, ...rest }: MobileLayoutHeaderProps) {
  return (
    <div className="" {...rest}>
      {children}
    </div>
  );
}

function Footer({ children, ...rest }: MobileLayoutHeaderProps) {
  return (
    <div className="" {...rest}>
      {children}
    </div>
  );
}

export function MobileLayout(props: MobileLayoutProps): JSX.Element {
  return (
    <MobileLayoutContext.Provider value={null}>
      <div className="" {...props}>
        {React.Children.map(props.children, (child) =>
          React.cloneElement(child as React.ReactElement)
        )}
      </div>
    </MobileLayoutContext.Provider>
  );
}

MobileLayout.Header = Header;
MobileLayout.Body = Body;
MobileLayout.Footer = Footer;
