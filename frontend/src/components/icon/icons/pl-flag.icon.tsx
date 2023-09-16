import { type FunctionComponent } from "react";
import { type IconComponentProps } from "./icon-props";

export const PolandFlagIcon: FunctionComponent<IconComponentProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 200" className={className}>
      <path
        d="M0 100h340v100H0z"
        style={{
          fill: "red",
        }}
      />
      <path
        d="M0 0h340v100H0z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  );
};
