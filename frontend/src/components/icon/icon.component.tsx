import { FunctionComponent } from "react";
import { BurgerMenuIcon } from "./icons/burger-menu.icon.jsx";
import { IconComponentProps } from "./icons/icon-props.js";

export type IconType = "burger-menu";

type IconProps = IconComponentProps & {
  type: IconType;
};

const Icons: Record<IconType, FunctionComponent<IconComponentProps>> = {
  "burger-menu": BurgerMenuIcon,
};

export const Icon: FunctionComponent<IconProps> = ({ type, ...rest }) => {
  const IconComponent = Icons[type];
  return <IconComponent {...rest} />;
};
