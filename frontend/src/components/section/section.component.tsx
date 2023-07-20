import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  header: string;
}>;

export const Section: FunctionComponent<Props> = ({ header, children }) => {
  return (
    <section className="flex flex-col gap-5">
      <h2>{header}</h2>
      {children}
    </section>
  );
};
