import { PlayerArgs } from "../common/types/player";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getPlayer(args: PlayerArgs) {
  const url = buildUrl(method.getPlayer, {
    sessionId: args.sessionId,
    playerName: args.name,
  });

  const response = await fetch(new URL(url).href);

  console.log(url);

  return response.json();
}
