import { FunctionComponent } from "react";
import { MoonIcon } from "./icons/moon.icon";
import { IconComponentProps } from "./icons/icon-props";
import { SunIcon } from "./icons/sun.icon";

export type IconType = "moon" | "sun";

type IconProps = IconComponentProps & {
  type: IconType;
};

const Icons: Record<IconType, FunctionComponent<IconComponentProps>> = {
  moon: MoonIcon,
  sun: SunIcon,
};

export const Icon: FunctionComponent<IconProps> = ({ type, ...rest }) => {
  const IconComponent = Icons[type];
  return <IconComponent {...rest} />;
};
