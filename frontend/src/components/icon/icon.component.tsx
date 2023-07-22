import { FunctionComponent } from "react";
import { MoonIcon } from "./icons/moon.icon";
import { IconComponentProps } from "./icons/icon-props";
import { SunIcon } from "./icons/sun.icon";
import { GithubIcon } from "./icons/github.icon";
import { ArrowUpIcon } from "./icons/arrow-up.icon";

export type IconType = "moon" | "sun" | "github" | "arrow-up";

type IconProps = IconComponentProps & {
  type: IconType;
};

const Icons: Record<IconType, FunctionComponent<IconComponentProps>> = {
  moon: MoonIcon,
  sun: SunIcon,
  github: GithubIcon,
  "arrow-up": ArrowUpIcon,
};

export const Icon: FunctionComponent<IconProps> = ({ type, ...rest }) => {
  const IconComponent = Icons[type];
  return <IconComponent {...rest} />;
};
