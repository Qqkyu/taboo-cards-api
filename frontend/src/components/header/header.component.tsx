import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  return (
    <div className="navbar bg-base-100 p-4">
      <div className="navbar-start">
        <a href="/" className="btn-ghost btn text-xl normal-case text-primary-content">
          Taboo cards API
        </a>
      </div>
      <div className="navbar-end hidden md:flex gap-3">
        <a href="#card-model" className="btn-ghost btn-outline btn text-xl normal-case text-primary-content">
          <span>Card model</span>
        </a>
      </div>
    </div>
  );
};
