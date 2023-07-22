import { FunctionComponent } from "react";
import { CardModel } from "./_components/card-model/card-model.component";
import { Endpoints } from "./_components/endpoints/endpoints.component";
import { RateLimit } from "./_components/rate-limit/rate-limit.component";
import { Section } from "./_components/section/section.component";

export const Docs: FunctionComponent = () => {
  return (
    <div id="docs" className="flex flex-col gap-14">
      <Section header="Card model">
        <CardModel />
      </Section>
      <Section header="Endpoints">
        <Endpoints />
      </Section>
      <Section header="Rate limit">
        <RateLimit />
      </Section>
    </div>
  );
};
