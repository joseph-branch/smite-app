import { MatchHistoryArgs } from "../common/types/matchHistory";
import { buildUrl } from "../common/helpers/buildUrl";
import { getSessionId } from "./getSessionId";
import { method } from "../common/enums";

export async function getMatchPlayerDetails(args: MatchHistoryArgs) {
  const url = buildUrl(method.getMatchPlayerDetails, {
    sessionId: args.sessionId,
    matchId: args.matchId,
  });

  console.log(url);

  const response = await fetch(new URL(url).href);

  return response.json();
}
