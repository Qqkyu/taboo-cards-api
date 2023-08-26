import { LOCALHOST_API_URL_PREFIX, CARDS_PATHS } from "@/paths/api.paths";
import { Card } from "@/types/card.types";

export async function getCards({ lang }: { lang: "en" | "pl" }): Promise<Array<Card>> {
  const response = await fetch(`${LOCALHOST_API_URL_PREFIX}${CARDS_PATHS.cards}?language=${lang}`);
  const data = await response.json();
  return data.data;
}
