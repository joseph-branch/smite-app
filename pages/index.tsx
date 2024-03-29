import { useContext, useEffect, useMemo } from "react";

import { HomeBuild } from "../src/components/sections/builds/HomeBuild";
import { HomeCharacter } from "../src/components/characters/cards/HomeCharacter";
import { HomeInfo } from "../src/components/cards/HomeInfo";
import { HomeSkin } from "../src/components/cards/HomeSkin";
import { PlayerArgs } from "../common/types/player";
import { useProcedure } from "../src/hooks/useProcedure";
import { useSessionContext } from "../src/hooks/useSessionContext";

const Home: React.FC = () => {
  const { sessionId } = useSessionContext();

  const { execute: getPlayerIdByName, result: playerId } = useProcedure<
    PlayerArgs,
    any
  >("getPlayerIdByName");

  useEffect(() => {
    getPlayerIdByName({ sessionId: sessionId!!, name: "ph1rewall" });
  }, [getPlayerIdByName, sessionId]);

  useMemo(() => {
    if (!playerId) return;

    console.log(playerId);
  }, [playerId]);

  return (
    <>
      <div className="flex flex-col gap-5 overflow-auto">
        <div className="flex gap-5 pb-3">
          {Array.from(Array(20)).map((a, index) => (
            <HomeCharacter key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 overflow-auto">
        <div className="flex gap-5 pb-1 justify-between">
          <HomeInfo info="Patch Notes" />
          <HomeInfo info="Videos" />
          <HomeInfo info="Forums" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <p className="flex">{"Top Rated Builds"}</p>
        <span className="border-b flex flex-1 items-center border-color-100" />
      </div>

      <div className="flex gap-5 overflow-auto">
        <HomeBuild sectionTitle="Top Rated Builds" />
      </div>

      <div className="flex justify-center items-center gap-1">
        <p className="flex">{"Most Recent Builds"}</p>
        <span className="border-b flex flex-1 items-center border-color-100" />
      </div>

      <div className="flex gap-5">
        <HomeBuild sectionTitle="Most Recent Builds" />
      </div>

      <div className="flex flex-col gap-5 overflow-auto">
        <div className="flex gap-5">
          {Array.from(Array(20)).map((a, index) => (
            <HomeSkin key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
