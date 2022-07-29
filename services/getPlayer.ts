import { PlayerArgs } from "../common/types/player";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getPlayer(args: PlayerArgs) {
  const url = buildUrl(method.getPlayer, args);

  const response = await fetch(new URL(url).href);

  console.log(url);

  const player = await response.json();

  return player[0];
}
