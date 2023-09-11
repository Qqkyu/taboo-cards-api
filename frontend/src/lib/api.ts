import { CARDS_PATHS } from "@/paths/api.paths";
import { Card } from "@/types/card.types";

export async function getCards({
  lang,
  apiUrlPrefix,
}: {
  lang: "en" | "pl";
  apiUrlPrefix: string;
}): Promise<Array<Card>> {
  const response = await fetch(`${apiUrlPrefix}${CARDS_PATHS.cards}?language=${lang}`);
  const data = await response.json();
  return data.data;
}

export async function getRandomCard({
  lang,
  apiUrlPrefix,
}: {
  lang: "en" | "pl";
  apiUrlPrefix: string;
}): Promise<Card> {
  const response = await fetch(`${apiUrlPrefix}${CARDS_PATHS.random}?language=${lang}`);
  const data = await response.json();
  return data.data;
}
