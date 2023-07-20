import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  header: string;
}>;

export const Section: FunctionComponent<Props> = ({ id, header, children }) => {
  return (
    <section id={id} className="flex flex-col gap-5 p-5">
      <h2 className="prose prose-2xl">{header}</h2>
      {children}
    </section>
  );
};
