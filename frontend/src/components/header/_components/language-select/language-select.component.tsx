import { Icon } from "@/components/icon/icon.component";
import { FunctionComponent, useEffect, useState } from "react";

type Props = {
  lang: string;
};

export const LanguageSelect: FunctionComponent<Props> = ({ lang }) => {
  const [href, setHref] = useState(undefined);

  useEffect(() => {
    const [, , ...rest] = window.location.pathname.split("/");
    const slug = rest.join("/");
    setHref(`/${lang === "en" ? "pl" : "en"}/${slug}`);
  }, [lang]);

  return (
    <label className="swap">
      <input type="checkbox" />

      <a href={href}>
        <Icon type="gb-flag" className={`w-6 sm:w-7 lg:w-8 ${lang === "en" ? "swap-on" : "swap-off"}`} />
      </a>

      <a href={href}>
        <Icon type="pl-flag" className={`w-6 sm:w-7 lg:w-8 ${lang === "en" ? "swap-off" : "swap-on"}`} />
      </a>
    </label>
  );
};
