import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  color: "text-base-content" | "text-primary-content" | "text-secondary-content";
}>;

const H1: FunctionComponent<Props> = ({ children, color }) => {
  return <h1 className={`prose prose-xl sm:prose-2xl max-w-full font-bold ${color}`}>{children}</h1>;
};

const H2: FunctionComponent<Props> = ({ children, color }) => {
  return <h2 className={`prose prose-xl sm:prose-2xl max-w-full font-semibold ${color}`}>{children}</h2>;
};

const H3: FunctionComponent<Props> = ({ children, color }) => {
  return <h3 className={`prose prose-lg sm:prose-xl max-w-full font-medium ${color}`}>{children}</h3>;
};

const H4: FunctionComponent<Props> = ({ children, color }) => {
  return <h4 className={`prose prose-base lg:prose-lg max-w-full font-normal ${color}`}>{children}</h4>;
};

const P1: FunctionComponent<Props> = ({ children, color }) => {
  return <p className={`prose prose-sm sm:prose-base max-w-full ${color}`}>{children}</p>;
};

const P2: FunctionComponent<Props> = ({ children, color }) => {
  return <p className={`prose prose-base sm:prose-lg max-w-full ${color}`}>{children}</p>;
};

export const Font = { H1, H2, H3, H4, P1, P2 };
