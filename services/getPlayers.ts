import { PlayerArgs } from "../common/types/player";
import { buildUrl } from "../common/helpers/buildUrl";
import { getPlayer } from "./getPlayer";
import { method } from "../common/enums";
import moment from "moment";

export async function getPlayers(args: PlayerArgs) {
  const url = buildUrl(method.searchPlayers, args);

  const response = await fetch(new URL(url).href);

  console.log(url);

  const players: any[] = await response.json();

  const filteredPlayers = players.filter((p) => p.privacy_flag !== "y");

  const playerData = await Promise.all(
    filteredPlayers.map(async (p) => {
      const player = await getPlayer({
        sessionId: args.sessionId,
        playerName: p.player_id,
      });

      if (!player) return;

      return {
        activePlayerId: player.ActivePlayerId,
        avatarUrl:
          player.Avatar_URL.toString().trim() !== ""
            ? player.Avatar_URL
            : "https://storage.googleapis.com/smite-images/default.jpg",
        minutesPlayed: player.MinutesPlayed,
        mergedPlayers: player.MergedPlayers,
        name: p.Name,
        personalStatusMessage: player.Personal_Status_Message,
        platform: player.Platform,
        region: player.Region,
        wins: player.Wins,
        level: player.Level,
        losses: player.Losses,
        lastLoginDatetime: moment(player.Last_Login_Datetime).format(
          "MM-DD-YYYY"
        ),
      };
    })
  );

  const finalPlayerData = playerData.filter((p) => p);

  return finalPlayerData;
}
