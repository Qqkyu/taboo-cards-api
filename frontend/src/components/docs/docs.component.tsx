import { FunctionComponent } from "react";
import { CardModel } from "./_components/card-model/card-model.component";
import { Endpoints } from "./_components/endpoints/endpoints.component";
import { RateLimit } from "./_components/rate-limit/rate-limit.component";
import { Section } from "./_components/section/section.component";

export const Docs: FunctionComponent = () => {
  return (
    <div className="flex w-[300px] flex-col gap-14 sm:w-[500px] lg:w-[750px]">
      <Section id="card-model" header="Card model">
        <CardModel />
      </Section>
      <Section id="endpoints" header="Endpoints">
        <Endpoints />
      </Section>
      <Section id="rate-limit" header="Rate limit">
        <RateLimit />
      </Section>
    </div>
  );
};
