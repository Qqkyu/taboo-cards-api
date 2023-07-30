import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const CheckmarkIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 13.364 3.036 2.956a1 1 0 0 0 1.395 0L19 7"
      />
    </svg>
  );
};
