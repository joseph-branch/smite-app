import { Ability, Character } from "@prisma/client";

import { CharacterStatDisplay } from "./CharacterStatDisplay";

type CharacterDetailProps = {
  character: Character;
  abilities: Ability[];
};

/* eslint-disable @next/next/no-img-element */
export const CharacterDetails: React.FC<CharacterDetailProps> = ({
  character,
  abilities,
}) => {
  if (!character) {
    return <></>;
  }

  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex justify-between text-color-50 bg-color-500">
        <CharacterStatDisplay stat="HP" value={character.health} />
        <CharacterStatDisplay stat="MN" value={character.mana} />
        <CharacterStatDisplay stat="SPD" value={character.speed} />
        <CharacterStatDisplay stat="MP" value={character.magicalPower} />
        <CharacterStatDisplay stat="PP" value={character.physicalPower} />
        <CharacterStatDisplay
          stat="ATS"
          value={Number(character.attackSpeed).toFixed(2)}
        />
        <CharacterStatDisplay
          stat="MPT"
          value={Number(character.magicProtection).toFixed(1)}
        />
        <CharacterStatDisplay
          stat="PPT"
          value={Number(character.physicalProtection).toFixed(1)}
        />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        {abilities?.map((a, index) => (
          <div className="flex flex-col" key={index}>
            <div className="bg-color-500 rounded flex flex-1">
              <img
                src={a.url}
                alt={a.name}
                className="border-r border-color-50 rounded-bl-md rounded-tl-md"
              />
              <div className="flex flex-col">
                <span className="flex text-color-50 text-sm">{a.name}</span>
                <span className="text-color-50 items-center text-xs">
                  {a.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
