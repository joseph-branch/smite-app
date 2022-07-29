import { useEffect, useMemo } from "react";

import { Character } from "@prisma/client";
import { CharacterArgs } from "../../common/types/character";
import { CharacterStats } from "../../src/components/characters/cards/CharacterStats";
import { useProcedure } from "../../src/hooks/useProcedure";
import { useSessionContext } from "../../src/hooks/useSessionContext";

export const CharactersPage: React.FC = () => {
  const { sessionId } = useSessionContext();

  const { execute: getCharacters, result: characters } = useProcedure<
    CharacterArgs,
    Character[]
  >("getCharacters");

  useEffect(() => {
    getCharacters({ sessionId: sessionId! });
  }, [getCharacters, sessionId]);

  useMemo(() => {
    if (!characters) return;

    console.log(characters);
  }, [characters]);

  return (
    <div className="flex flex-1 flex-col gap-3 flex-wrap">
      {characters?.map((c, index) => (
        <CharacterStats character={c} key={index} />
      ))}
    </div>
  );
};

export default CharactersPage;
