import { FunctionComponent } from "react";
import { ThemeToggle } from "./_components/theme-toggle/theme-toggle.component";
import { Icon } from "@/components/icon/icon.component";

export const Header: FunctionComponent = () => {
  return (
    <div className="navbar bg-base-300 h-16 p-3 sm:h-20 sm:p-4">
      <div className="navbar-start gap-2 sm:gap-3">
        <div className="dropdown">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={0} className="btn btn-xs sm:btn-sm btn-ghost lg:hidden">
            <Icon color="hsl(var(--pc))" type="burger-menu" className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a href="/docs" className="prose text-base-content">
                Docs
              </a>
              <ul className="p-2">
                <li>
                  <a href="/docs/#card-model" className="prose text-base-content">
                    Card model
                  </a>
                </li>
                <li>
                  <a href="/docs/#endpoints" className="prose text-base-content">
                    Endpoints
                  </a>
                </li>
                <li>
                  <a href="/docs/#base-url" className="prose text-base-content">
                    Base URL
                  </a>
                </li>
                <li>
                  <a href="/docs/#rate-limit" className="prose text-base-content">
                    Rate limit
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/playground" className="prose text-base-content">
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
      <div className="navbar-end flex gap-3 sm:gap-4 lg:gap-5">
        <ul className="menu menu-horizontal hidden gap-3 lg:flex">
          <li>
            <details className="z-10">
              <summary>
                <a href="/docs" className="prose prose-xl text-base-content font-medium">
                  Docs
                </a>
              </summary>
              <ul className="p-2">
                <li>
                  <a href="/docs/#card-model" className="prose text-base-content">
                    Card model
                  </a>
                </li>
                <li>
                  <a href="/docs/#endpoints" className="prose text-base-content">
                    Endpoints
                  </a>
                </li>
                <li>
                  <a href="/docs/#base-url" className="prose text-base-content">
                    Base URL
                  </a>
                </li>
                <li>
                  <a href="/docs/#rate-limit" className="prose text-base-content">
                    Rate limit
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/playground" className="prose prose-xl text-base-content font-medium">
              <span>Playground</span>
            </a>
          </li>
        </ul>
        <a
          href="https://github.com/Qqkyu/taboo-cards-api"
          aria-label="API GitHub repository"
          target="_blank"
          className="normal-case"
        >
          <Icon type="github" color="hsl(var(--pc))" className="w-6 sm:w-7 lg:w-8" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};
