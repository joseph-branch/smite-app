import { CharacterArgs } from "../common/types/character";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getItems(args: CharacterArgs) {
  const url = buildUrl(method.getItems, {
    sessionId: args.sessionId,
    lang: "1",
  });

  const response = await fetch(new URL(url).href);

  console.log(url);

  return response.json();
}
