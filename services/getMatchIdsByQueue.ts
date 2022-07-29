import { MatchHistoryArgs } from "../common/types/matchHistory";
import { buildUrl } from "../common/helpers/buildUrl";
import { method } from "../common/enums";

export async function getMatchIdsByQueue(args: MatchHistoryArgs) {
  const url = buildUrl(method.getMatchIdsByQueue, {
    sessionId: args.sessionId,
    queue: "450/20220728/50",
  });

  const response = await fetch(new URL(url).href);

  console.log(url);

  return response.json();
}
