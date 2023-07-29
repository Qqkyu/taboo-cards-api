import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/icon/icon.component";

export const ThemeToggle: FunctionComponent = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialTheme = useMemo(() => theme, []);

  const handleClick = () => {
    theme === "pastel" ? setTheme("dark") : setTheme("pastel");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <label className="btn btn-circle btn-ghost swap swap-rotate">
      <input type="checkbox" onClick={handleClick} />

      <Icon
        color="hsl(var(--pc))"
        type="sun"
        className={`w-6 lg:w-8 ${initialTheme === "pastel" ? "swap-on" : "swap-off"}`}
      />

      <Icon
        color="hsl(var(--pc))"
        type="moon"
        className={`w-6 lg:w-8 ${initialTheme === "pastel" ? "swap-off" : "swap-on"}`}
      />
    </label>
  );
};
