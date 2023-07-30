import { FunctionComponent } from "react";
import { ThemeToggle } from "./_components/theme-toggle/theme-toggle.component";
import { Icon } from "@/components/icon/icon.component";

export const Header: FunctionComponent = () => {
  return (
    <div className="navbar bg-base-300 h-16 p-2 sm:p-4 lg:h-20">
      <div className="navbar-start gap-2 sm:gap-3">
        <div className="dropdown">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={0} className="btn btn-xs sm:btn-sm btn-ghost lg:hidden">
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
        <a
          href="/"
          className="btn-ghost btn btn-xs sm:btn-sm lg:btn-md text-primary-content text-sm normal-case sm:text-lg lg:text-xl"
        >
          Taboo cards API
        </a>
      </div>
      <div className="navbar-end flex gap-2 sm:gap-3">
        <ul className="menu menu-horizontal hidden gap-3 px-5 lg:flex">
          <li>
            <a href="#cards" className="prose prose-xl font-medium">
              <span>Cards</span>
            </a>
          </li>
          <li>
            <details className="z-10">
              <summary>
                <a href="#docs" className="prose prose-xl font-medium">
                  Docs
                </a>
              </summary>
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
            </details>
          </li>
          <li>
            <a href="#playground" className="prose prose-xl font-medium">
              <span>Playground</span>
            </a>
          </li>
        </ul>
        <a
          href="https://github.com/Qqkyu/taboo-cards-api"
          aria-label="API GitHub repository"
          target="_blank"
          className="btn btn-circle btn-xs lg:btn-sm normal-case"
        >
          <Icon type="github" color="hsl(var(--pc))" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};
