import Skeleton from "react-loading-skeleton";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/icon/icon.component";
import "react-loading-skeleton/dist/skeleton.css";

export const ThemeToggle: FunctionComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialTheme = useMemo(() => theme, []);

  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return isMounted ? (
    <label className="swap swap-rotate">
      <input type="checkbox" onClick={handleClick} />

      <Icon
        color="hsl(var(--bc))"
        type="sun"
        className={`w-6 sm:w-7 lg:w-8 ${initialTheme === "light" ? "swap-on" : "swap-off"}`}
      />

      <Icon
        color="hsl(var(--bc))"
        type="moon"
        className={`w-6 sm:w-7 lg:w-8 ${initialTheme === "light" ? "swap-off" : "swap-on"}`}
      />
    </label>
  ) : (
    <div className="h-6 w-6 leading-none sm:h-7 sm:w-7 lg:h-8 lg:w-8">
      <Skeleton circle height="100%" baseColor="hsl(var(--b3))" />
    </div>
  );
};
