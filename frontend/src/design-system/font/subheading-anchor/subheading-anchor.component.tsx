import type { FunctionComponent } from "react";

type Props = {
  href: string;
};

export const SubheadingAnchor: FunctionComponent<Props> = ({ href }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={href}
      className="px-1 no-underline opacity-0 transition-opacity duration-200 after:content-['#'] group-hover:opacity-50"
    />
  );
};
