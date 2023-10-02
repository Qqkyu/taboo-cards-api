import { type FunctionComponent } from "react";
import { type IconComponentProps } from "./icon-props";

export const TabooIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64" className={className}>
      <path
        d="m32 2c-16.568 0-30 13.431-30 30 0 16.569 13.432 30 30 30s30-13.432 30-30c0-16.569-13.432-30-30-30m11.754 20.629h-8.682v23.878h-6.104v-23.878h-8.721v-5.138h23.506v5.138z"
        fill={color}
      />
    </svg>
  );
};
