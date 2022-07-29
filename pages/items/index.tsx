import { useEffect, useMemo } from "react";

import { CharacterArgs } from "../../common/types/character";
import { useProcedure } from "../../src/hooks/useProcedure";
import { useSessionContext } from "../../src/hooks/useSessionContext";

export const Items: React.FC = () => {
  const { sessionId } = useSessionContext();

  const { execute: getItems, result: items } = useProcedure<CharacterArgs, any>(
    "getItems"
  );

  useEffect(() => {
    getItems({ sessionId: sessionId! });
  }, [getItems, sessionId]);

  useMemo(() => {
    if (!items) return;

    console.log(items);
  }, [items]);

  return (
    <div className="flex flex-1 justify-center items-center flex-col h-screen">
      <span>Welcome to Items Page</span>
    </div>
  );
};

export default Items;
