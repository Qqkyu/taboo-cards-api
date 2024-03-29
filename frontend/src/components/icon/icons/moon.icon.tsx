import { type FunctionComponent } from "react";
import { type IconComponentProps } from "./icon-props";

export const MoonIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="m29.223 24.178-.021-.057a.753.753 0 0 0-.986-.404l.005-.002a11.054 11.054 0 0 1-4.306.857c-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l.074-.028.211-.089a.75.75 0 0 0-.185-1.427l-.004-.001a14.255 14.255 0 0 0-2.174-.161C9.313 1.25 2.71 7.853 2.71 15.998s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l.025-.034a.753.753 0 0 0 .069-.809l.002.004zm-6.705 4.062c-1.497.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l.034-.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752a12.8 12.8 0 0 0 2.485-.242l-.081.013a13.23 13.23 0 0 1-3.716 2.364l-.087.033z" />
    </svg>
  );
};
