import { FunctionComponent } from "react";
import { IconComponentProps } from "./icon-props";

export const StairsIcon: FunctionComponent<IconComponentProps> = ({ color, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512" className={className}>
      <path
        d="M354.38 53.422v115.304H226.378V284.03H98.38v115.304H0v59.244h157.62V343.274h128.002V227.97h128.003V112.666H512V53.422z"
        style={{
          fill: color,
        }}
      />
    </svg>
  );
};
