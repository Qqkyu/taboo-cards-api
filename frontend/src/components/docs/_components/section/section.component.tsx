import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  header: string;
}>;

export const Section: FunctionComponent<Props> = ({ id, header, children }) => {
  return (
    <section id={id} className="flex flex-col gap-6">
      <h2 className="prose prose-xl lg:prose-2xl text-base-content font-semibold">{header}</h2>
      {children}
    </section>
  );
};
