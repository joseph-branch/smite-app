import { MatchHistoryArgs } from "../common/types/matchHistory";
import { buildUrl } from "../common/helpers/buildUrl";
import { getSessionId } from "./getSessionId";
import { method } from "../common/enums";

export async function getMatchPlayerDetails(args: MatchHistoryArgs) {
  const url = buildUrl(method.getMatchDetails, {
    sessionId: args.sessionId,
    matchId: args.matchId,
  });

  const response = await fetch(new URL(url).href);

  console.log(url);

  return response.json();
}
