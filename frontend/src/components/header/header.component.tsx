import { FunctionComponent } from "react";
import { ThemeToggle } from "./_components/theme-toggle/theme-toggle.component";
import { Icon } from "@/components/icon/icon.component";

export const Header: FunctionComponent = () => {
  return (
    <div className="navbar bg-base-300 p-4">
      <div className="navbar-start gap-3">
        <div className="dropdown">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <Icon color="hsl(var(--pc))" type="burger-menu" className="h-5 w-5" />
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a href="#cards" className="prose">
                Cards
              </a>
            </li>
            <li>
              <a href="#docs" className="prose">
                Docs
              </a>
              <ul className="p-2">
                <li>
                  <a href="#card-model" className="prose">
                    Card model
                  </a>
                </li>
                <li>
                  <a href="#endpoints" className="prose">
                    Endpoints
                  </a>
                </li>
                <li>
                  <a href="#rate-limit" className="prose">
                    Rate limit
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#playground" className="prose">
                Playground
              </a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn-ghost btn text-primary-content text-xl normal-case">
          Taboo cards API
        </a>
      </div>
      <div className="navbar-end flex gap-4">
        <a href="#cards" className="btn-ghost btn-outline btn text-primary-content hidden text-lg normal-case lg:flex">
          <span>Cards</span>
        </a>
        <a href="#docs" className="btn-ghost btn-outline btn text-primary-content hidden text-lg normal-case lg:flex">
          <span>Docs</span>
        </a>
        <a
          href="#playground"
          className="btn-ghost btn-outline btn text-primary-content hidden text-lg normal-case lg:flex"
        >
          <span>Playground</span>
        </a>
        <a
          href="https://github.com/Qqkyu/taboo-cards-api"
          target="_blank"
          className="btn btn-circle btn-sm normal-case"
        >
          <Icon type="github" color="hsl(var(--pc))" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};
