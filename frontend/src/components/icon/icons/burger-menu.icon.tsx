import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const BurgerMenuIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg viewBox="0 0 24 24" stroke={color} xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
