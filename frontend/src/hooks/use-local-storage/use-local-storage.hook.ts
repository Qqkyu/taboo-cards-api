import { useEffect, useState } from "react";

type LocalStorageKey = "just-cards-timer" | "teams-purple-team-name" | "teams-pink-team-name";

export const useLocalStorage = <T extends string>(key: LocalStorageKey, fallbackValue: T) => {
  const localStorageValue = typeof window !== "undefined" ? (localStorage.getItem(key) as T) : undefined;
  const [value, setValue] = useState<T>(localStorageValue ?? fallbackValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key) as T;
    setValue(storedValue || fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};
