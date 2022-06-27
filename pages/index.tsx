import { useEffect, useMemo } from "react";
import { useProcedure } from "../src/hooks/useProcedure";

const Home: React.FC = () => {
  const { execute, loading, result } = useProcedure<any, string>("getAppName");

  useEffect(() => {
    execute({});
  }, []);

  const appname = useMemo(() => {
    if (!result) return "App";

    return result;
  }, [result]);

  return (
    <div className="flex justify-center items-center flex-1 h-screen w-screen">
      <h1 className="font-semibold">Welcome to {appname}</h1>
    </div>
  );
};

export default Home;
