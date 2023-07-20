import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const SunIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} stroke={color}>
      <path d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Z" />
      <path d="M12 3.5V5.5" strokeLinecap="round" />
      <path d="M20.5 12H18.5" strokeLinecap="round" />
      <path d="M5.5 12H3.5" strokeLinecap="round" />
      <path d="M12 18.5V20.5" strokeLinecap="round" />
      <path d="M16.5 7.5L18 6" strokeLinecap="round" />
      <path d="M6 18L7.5 16.5" strokeLinecap="round" />
      <path d="M6 6L7.5 7.5" strokeLinecap="round" />
      <path d="M16.5 16.5L18 18" strokeLinecap="round" />
    </svg>
  );
};
