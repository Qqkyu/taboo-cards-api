import { Font } from "@/design-system/font/font.component";
import { FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  id: string;
  header: string;
}>;

export const Section: FunctionComponent<Props> = ({ id, header, children }) => {
  return (
    <section id={id} className="flex flex-col gap-6">
      <Font.H2 color="text-base-content">{header}</Font.H2>
      {children}
    </section>
  );
};
