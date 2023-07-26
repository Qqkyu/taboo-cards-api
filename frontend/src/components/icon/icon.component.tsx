import { FunctionComponent } from "react";
import { MoonIcon } from "./icons/moon.icon";
import { IconComponentProps } from "./icons/icon-props";
import { SunIcon } from "./icons/sun.icon";
import { GithubIcon } from "./icons/github.icon";
import { ArrowUpIcon } from "./icons/arrow-up.icon";
import { BurgerMenuIcon } from "./icons/burger-menu.icon";
import { ErrorIcon } from "./icons/error.icon";

export type IconType = "moon" | "sun" | "github" | "error" | "arrow-up" | "burger-menu";

type IconProps = IconComponentProps & {
  type: IconType;
};

const Icons: Record<IconType, FunctionComponent<IconComponentProps>> = {
  moon: MoonIcon,
  sun: SunIcon,
  github: GithubIcon,
  error: ErrorIcon,
  "arrow-up": ArrowUpIcon,
  "burger-menu": BurgerMenuIcon,
};

export const Icon: FunctionComponent<IconProps> = ({ type, ...rest }) => {
  const IconComponent = Icons[type];
  return <IconComponent {...rest} />;
};
