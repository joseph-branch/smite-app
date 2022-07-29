import { getMethodSignature } from "./getMethodSignature";
import { getTimestamp } from "./getTilmestamp";

export type urlOptions = {
  sessionId?: string;
  playerName?: string;
  characterId?: string;
  lang?: string | number;
  matchId?: string;
  queue?: string;
  tier?: string;
  season?: string;
  portalId?: string;
};

export function buildUrl(method: string, options: urlOptions = {}) {
  const {
    sessionId,
    playerName,
    characterId,
    lang,
    matchId,
    queue,
    tier,
    season,
    portalId,
  } = options;

  const timestamp = getTimestamp();

  const signature = getMethodSignature(method, timestamp);

  let url = `${process.env.BASE_URL}/${method}json/${process.env.SECONDARY_DEV_ID}/${signature}/`;

  sessionId ? (url += `${sessionId}/`) : null;

  url += timestamp;

  playerName ? (url += `/${playerName}`) : null;
  characterId ? (url += `/${characterId}`) : null;
  lang ? (url += `/${lang}`) : null;
  matchId ? (url += `/${matchId}`) : null;
  queue ? (url += `/${queue}`) : null;
  tier ? (url += `/${tier}`) : null;
  season ? (url += `/${season}`) : null;
  portalId ? (url += `/${portalId}`) : null;

  return url;
}
