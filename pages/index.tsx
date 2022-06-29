import { useEffect, useMemo } from "react";

import { HomeCharacter } from "../src/components/characters/cards/HomeCharacter";
import { useProcedure } from "../src/hooks/useProcedure";

const Home: React.FC = () => {
  const { execute, loading, result } = useProcedure<any, string>("getAppName");

  useEffect(() => {
    execute({});
  }, [execute]);

  const appname = useMemo(() => {
    if (!result) return "App";

    return result;
  }, [result]);

  return (
    <>
      <div className="flex flex-col gap-5 overflow-auto">
        <div className="flex gap-5 pb-3">
          {Array.from(Array(20)).map((a, index) => (
            <HomeCharacter key={index} />
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <h1 className="font-semibold">Welcome to {appname}</h1>
      </div>
    </>
  );
};

export default Home;
