/* eslint-disable no-unused-vars */
import { noop } from "@/utils/noop";
import { createContext } from "react";

export type Settings = {
  roundTime: number;
  rounds: number;
  skips: number;
};

export const DEFAULT_SETTINGS_VALUES: Settings = {
  roundTime: 60,
  rounds: 2,
  skips: 2,
};

export const SettingsContext = createContext<
  [
    Settings,
    {
      setRoundTime: (roundTime: string) => void;
      setRounds: (rounds: string) => void;
      setSkips: (skips: string) => void;
    },
  ]
>([DEFAULT_SETTINGS_VALUES, { setRoundTime: noop, setRounds: noop, setSkips: noop }]);
