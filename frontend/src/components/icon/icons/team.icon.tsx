import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const TeamIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill={color}
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="M256.495 96.434c26.632 0 48.213-21.597 48.213-48.205C304.708 21.58 283.128 0 256.495 0c-26.65 0-48.222 21.58-48.222 48.229.001 26.608 21.573 48.205 48.222 48.205zM298.267 119.279h-84.542c-23.362 0-48.779 25.418-48.779 48.788v162.058c0 11.685 9.463 21.156 21.148 21.156h14.756l8.048 138.206c0 12.434 10.078 22.513 22.513 22.513h49.178c12.434 0 22.513-10.078 22.513-22.513l8.04-138.206h14.764c11.676 0 21.148-9.471 21.148-21.156V168.067c0-23.37-25.418-48.788-48.787-48.788zM104.141 149.083c23.262 0 42.105-18.85 42.105-42.104 0-23.262-18.843-42.112-42.105-42.112-23.27 0-42.104 18.851-42.104 42.112 0 23.253 18.834 42.104 42.104 42.104zM408.716 149.083c23.27 0 42.104-18.85 42.104-42.104 0-23.262-18.834-42.112-42.104-42.112-23.253 0-42.104 18.851-42.104 42.112 0 23.253 18.851 42.104 42.104 42.104zM137.257 169.024H66.789c-20.398 0-42.595 22.213-42.595 42.612v141.526c0 10.212 8.264 18.476 18.468 18.476h12.884l7.024 120.704c0 10.852 8.805 19.658 19.666 19.658h42.945c10.861 0 19.666-8.805 19.666-19.658l7.016-120.704v-6.849c-8.98-8.856-14.606-21.082-14.606-34.664V169.024zM445.211 169.024H374.743v161.101c0 13.582-5.626 25.808-14.615 34.664v6.849l7.017 120.704c0 10.852 8.814 19.658 19.674 19.658h42.945c10.862 0 19.659-8.805 19.659-19.658l7.032-120.704h12.883c10.204 0 18.468-8.265 18.468-18.476V211.636c0-20.399-22.196-42.612-42.595-42.612z" />
    </svg>
  );
};