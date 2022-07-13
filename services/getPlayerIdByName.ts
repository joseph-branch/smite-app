import { PlayerArgs } from "../common/types/player";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getPlayerIdByName(args: PlayerArgs) {
  const url = buildUrl(method.getPlayerIdByName, {
    sessionId: args.sessionId,
    playerName: args.name,
  });

  const response = await fetch(new URL(url).href);

  return response.json();
}
