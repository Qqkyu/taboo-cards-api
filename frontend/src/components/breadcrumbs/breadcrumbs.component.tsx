import { Font } from "@/design-system/font/font.component";
import type { FunctionComponent } from "react";

type Props = {
  breadcrumbs: Array<{ label: string; href?: string }>;
};

export const Breadcrumbs: FunctionComponent<Props> = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs px-6 py-4 sm:px-8 lg:px-12">
      <ul>
        {breadcrumbs.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>
              <Font.P1 color="text-base-content">{label}</Font.P1>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
