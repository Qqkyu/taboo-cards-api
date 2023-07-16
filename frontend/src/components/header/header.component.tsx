import { FunctionComponent } from "react";
import { Icon } from "@/components/icon/icon.component";

export const Header: FunctionComponent = () => {
  return (
    <div className="navbar bg-base-100 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost md:hidden">
            <Icon type="burger-menu" color="hsl(var(--pc))" className="h-5 w-5" />
          </button>
        </div>
        <a href="/" className="btn-ghost btn text-xl normal-case text-primary-content">
          Taboo cards API
        </a>
      </div>
    </div>
  );
};
