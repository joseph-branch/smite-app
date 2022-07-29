import { useEffect, useMemo } from "react";

import { CharacterArgs } from "../../common/types/character";
import { MatchHistoryArgs } from "../../common/types/matchHistory";
import { PlayerArgs } from "../../common/types/player";
import { useProcedure } from "../../src/hooks/useProcedure";
import { useSessionContext } from "../../src/hooks/useSessionContext";

export const Players: React.FC = () => {
  const { sessionId } = useSessionContext();

  const { execute: getMatchIdsByQueue, result: items } = useProcedure<
    MatchHistoryArgs,
    any
  >("getMatchIdsByQueue");

  const { execute: getPlayer, result: player } = useProcedure<PlayerArgs, any>(
    "getPlayers"
  );

  const { execute: getMatchHistory, result: matchHistory } = useProcedure<
    MatchHistoryArgs,
    any
  >("getMatchHistory");

  const { execute: getMatchPlayerDetails, result: details } = useProcedure<
    MatchHistoryArgs,
    any
  >("getMatchPlayerDetails");

  useEffect(() => {
    getMatchIdsByQueue({ sessionId: sessionId! });
    // getPlayer({ sessionId: sessionId!, name: "trelli" });
    // getMatchHistory({ sessionId: sessionId!, player: "" });
    // getMatchPlayerDetails({ sessionId: sessionId!, matchId: "" });
  }, [
    getMatchIdsByQueue,
    getPlayer,
    getMatchHistory,
    getMatchPlayerDetails,
    sessionId,
  ]);

  useMemo(() => {
    if (!items) return;

    console.log(items);
  }, [items]);

  return (
    <div className="flex flex-1 justify-center items-center flex-col h-screen">
      <span>Welcome to Players Page</span>
    </div>
  );
};

export default Players;
