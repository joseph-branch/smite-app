import { PlayerArgs, PlayerBasicResult } from "../../common/types/player";
import { useEffect, useMemo } from "react";

import { PlayerBasicInfo } from "../../src/components/players/cards/PlayerBasicInfo";
import { useProcedure } from "../../src/hooks/useProcedure";
import { useRouter } from "next/router";
import { useSessionContext } from "../../src/hooks/useSessionContext";

export const Players: React.FC = () => {
  const { sessionId } = useSessionContext();
  const router = useRouter();

  const {
    execute: getPlayers,
    loading,
    result: players,
  } = useProcedure<PlayerArgs, PlayerBasicResult[]>("getPlayers");

  useEffect(() => {
    const { searchTerm } = router.query;
    if (router && searchTerm?.toString()?.trim() !== "") {
      getPlayers({
        sessionId: sessionId!,
        playerName: searchTerm?.toString()!,
      });
    }
  }, [getPlayers, router, sessionId]);

  useMemo(() => {
    if (!players) return;

    console.log(players);
  }, [players]);

  return (
    <div className="flex flex-1 flex-wrap gap-3 items-center justify-between">
      {players?.map((p, index) => (
        <div key={index} className="flex basis-1/2">
          <PlayerBasicInfo key={p.activePlayerId} player={p} />
        </div>
      ))}
    </div>
  );
};

export default Players;
