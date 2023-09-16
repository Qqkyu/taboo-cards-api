import { type FunctionComponent } from "react";
import { type IconComponentProps } from "./icon-props";

export const SingleIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 468.614 468.614"
      className={className}
      fill={color}
    >
      <path d="M291.299 116.517h-3.501c10.635-12.36 17.102-28.378 17.102-45.915C304.899 31.666 273.219 0 234.305 0c-38.93 0-70.584 31.666-70.584 70.602 0 17.537 6.477 33.555 17.093 45.915h-3.51c-19.645 0-35.626 15.997-35.626 35.645v117.105c0 19.648 15.982 35.633 35.626 35.633h1.372v128.07c0 20.332 10.697 35.645 24.884 35.645h61.468c14.208 0 24.908-15.312 24.908-35.645V304.9h1.363c19.642 0 35.639-15.984 35.639-35.633V152.161c-.006-19.647-15.998-35.644-35.639-35.644z" />
    </svg>
  );
};
