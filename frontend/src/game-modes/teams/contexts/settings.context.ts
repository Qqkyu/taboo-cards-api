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

// eslint-disable-next-line no-unused-vars
export const SettingsContext = createContext<[Settings, (settings: Settings) => void]>([
  DEFAULT_SETTINGS_VALUES,
  () => {},
]);
