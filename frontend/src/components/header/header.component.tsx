import { FunctionComponent } from "react";
import { ThemeToggle } from "./_components/theme-toggle/theme-toggle.component";
import { Icon } from "@/components/icon/icon.component";

export const Header: FunctionComponent = () => {
  return (
    <div className="navbar bg-base-300 p-4">
      <div className="navbar-start">
        <a href="/" className="btn-ghost btn text-xl normal-case text-primary-content">
          Taboo cards API
        </a>
      </div>
      <div className="navbar-end flex gap-4">
        <a href="#cards" className="btn-ghost btn-outline btn text-lg normal-case text-primary-content">
          <span>Cards</span>
        </a>
        <a href="#docs" className="btn-ghost btn-outline btn text-lg normal-case text-primary-content">
          <span>Docs</span>
        </a>
        <a href="https://github.com/Qqkyu/taboo-cards-api" className="btn btn-circle btn-sm normal-case">
          <Icon type="github" color="hsl(var(--pc))" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};
