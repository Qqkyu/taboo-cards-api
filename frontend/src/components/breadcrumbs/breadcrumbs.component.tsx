import { Font } from "@/design-system/font/font.component";
import type { FunctionComponent } from "react";
import { Icon, type IconType } from "@/components/icon/icon.component";

type Props = {
  breadcrumbs: Array<{ label: string; href?: string; icon?: IconType }>;
};

export const Breadcrumbs: FunctionComponent<Props> = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumbs px-6 py-4 sm:px-8 lg:px-12">
      <ul>
        {breadcrumbs.map(({ label, href, icon }) => (
          <li key={label}>
            <a href={href} className="flex gap-2">
              {icon && <Icon type={icon} color="hsl(var(--bc))" className="w-3 sm:w-4" />}
              <Font.P1 color="text-base-content">{label}</Font.P1>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
