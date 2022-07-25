import { CharacterArgs } from "../common/types/character";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getGods(args: CharacterArgs) {
  const url = buildUrl(method.getGods, {
    sessionId: args.sessionId,
    lang: "1",
  });

  const response = await fetch(new URL(url).href);

  return response.json();
}
