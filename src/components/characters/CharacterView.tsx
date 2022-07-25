import { Ability, Character } from "@prisma/client";

import { CharacterBuilds } from "./cards/CharacterBuilds";
import { CharacterDetails } from "./cards/CharacterDetails";
import { CharacterModeStats } from "./cards/CharacterModeStats";
import { SelectedCharacter } from "./cards/SelectedCharacter";
import { useEffect } from "react";
import { useProcedure } from "../../hooks/useProcedure";

type CharacterViewProps = {
  characterId: number;
};

export const CharacterView: React.FC<CharacterViewProps> = ({
  characterId,
}) => {
  const { execute: getCharacterById, result: character } = useProcedure<
    { characterId: number },
    { character: Character; abilities: Ability[] }
  >("getCharacterById");

  useEffect(() => {
    getCharacterById({ characterId });
  }, [getCharacterById, characterId]);

  return (
    <div className="flex flex-1 gap-10 flex-col">
      <div className="flex flex-1 gap-5 flex-col md:flex-row">
        <SelectedCharacter character={character?.character!} />
        <CharacterDetails
          character={character?.character!}
          abilities={character?.abilities!}
        />
      </div>
      <div className="flex flex-1 gap-5 flex-col md:flex-row">
        <CharacterModeStats />
        <CharacterBuilds />
      </div>
    </div>
  );
};
