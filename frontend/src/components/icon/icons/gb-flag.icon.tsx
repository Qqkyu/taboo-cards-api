import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const GreatBritainFlagIcon: FunctionComponent<IconComponentProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" className={className}>
      <path
        d="M0 0h60v30H0z"
        style={{
          strokeWidth: "1pt",
          fill: "#006",
        }}
        transform="scale(16.667)"
      />
      <path
        d="M0 0v3.354L53.292 30H60v-3.354L6.708 0H0zm60 0v3.354L6.708 30H0v-3.354L53.292 0H60z"
        style={{
          strokeWidth: "1pt",
          fill: "#fff",
        }}
        transform="scale(16.667)"
      />
      <path
        d="M25 0v30h10V0H25zM0 10v10h60V10H0z"
        style={{
          strokeWidth: "1pt",
          fill: "#fff",
        }}
        transform="scale(16.667)"
      />
      <path
        d="M0 12v6h60v-6H0zM27 0v30h6V0h-6zM0 30l20-10h4.472l-20 10H0zM0 0l20 10h-4.472L0 2.236V0zm35.528 10 20-10H60L40 10h-4.472zM60 30 40 20h4.472L60 27.764V30z"
        style={{
          strokeWidth: "1pt",
          fill: "#c00",
        }}
        transform="scale(16.667)"
      />
    </svg>
  );
};
