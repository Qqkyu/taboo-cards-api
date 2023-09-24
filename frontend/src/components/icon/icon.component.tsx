import { type FunctionComponent } from "react";
import { MoonIcon } from "./icons/moon.icon";
import { type IconComponentProps } from "./icons/icon-props";
import { SunIcon } from "./icons/sun.icon";
import { GithubIcon } from "./icons/github.icon";
import { ArrowUpIcon } from "./icons/arrow-up.icon";
import { BurgerMenuIcon } from "./icons/burger-menu.icon";
import { ErrorIcon } from "./icons/error.icon";
import { CopyIcon } from "./icons/copy.icon";
import { CheckmarkIcon } from "./icons/checkmark.icon";
import { LanguageIcon } from "./icons/language.icon";
import { StairsIcon } from "./icons/stairs.icon";
import { CardIcon } from "./icons/card.icon";
import { GreatBritainFlagIcon } from "./icons/gb-flag.icon";
import { PolandFlagIcon } from "./icons/pl-flag.icon";
import { TwitterIcon } from "./icons/twitter.icon";
import { TeamIcon } from "./icons/team.icon";
import { SingleIcon } from "./icons/single.icon";
import { HomeIcon } from "./icons/home.icon";

export type IconType =
  | "home"
  | "copy"
  | "checkmark"
  | "moon"
  | "sun"
  | "single"
  | "team"
  | "github"
  | "twitter"
  | "error"
  | "card"
  | "stairs"
  | "language"
  | "arrow-up"
  | "burger-menu"
  | "gb-flag"
  | "pl-flag";

type IconProps = IconComponentProps & {
  type: IconType;
};

const Icons: Record<IconType, FunctionComponent<IconComponentProps>> = {
  home: HomeIcon,
  copy: CopyIcon,
  checkmark: CheckmarkIcon,
  moon: MoonIcon,
  sun: SunIcon,
  single: SingleIcon,
  team: TeamIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
  error: ErrorIcon,
  card: CardIcon,
  stairs: StairsIcon,
  language: LanguageIcon,
  "arrow-up": ArrowUpIcon,
  "burger-menu": BurgerMenuIcon,
  "gb-flag": GreatBritainFlagIcon,
  "pl-flag": PolandFlagIcon,
};

export const Icon: FunctionComponent<IconProps> = ({ type, ...rest }) => {
  const IconComponent = Icons[type];
  return <IconComponent {...rest} />;
};
