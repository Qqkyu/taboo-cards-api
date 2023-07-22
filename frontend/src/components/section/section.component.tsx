import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  header: string;
}>;

export const Section: FunctionComponent<Props> = ({ header, children }) => {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="prose prose-2xl font-semibold">{header}</h2>
      {children}
    </section>
  );
};
