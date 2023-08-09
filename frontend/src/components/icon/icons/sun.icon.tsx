import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const SunIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={className}>
      <circle cx={12} cy={12} r={5} stroke={color} strokeWidth={1.5} />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031M6.444 17.556l-2.222 2.222M19.778 19.777l-2.222-2.222"
      />
    </svg>
  );
};
