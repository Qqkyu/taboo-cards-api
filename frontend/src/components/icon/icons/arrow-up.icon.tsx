import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const ArrowUpIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className={className} stroke={color}>
      <path
        d="M19.92 15.05 13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
