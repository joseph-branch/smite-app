import { CharacterArgs } from "../common/types/character";
import { MatchHistoryArgs } from "../common/types/matchHistory";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getMatchHistory(args: MatchHistoryArgs) {
  const url = buildUrl(method.getMatchHistory, {
    sessionId: args.sessionId,
    playerName: args.player,
  });

  const response = await fetch(new URL(url).href);

  console.log(url);

  return response.json();
}
