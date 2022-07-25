/* eslint-disable @next/next/no-img-element */
import { Character } from "@prisma/client";
import { CharacterStatDisplay } from "./CharacterStatDisplay";
import Link from "next/link";

type CharacterStatsProps = {
  character: Character;
};

export const CharacterStats: React.FC<CharacterStatsProps> = ({
  character,
}) => {
  return (
    <Link href={`/characters/${character.characterId}`}>
      <div className="flex flex-1 bg-color-500 rounded-md h-16 cursor-pointer">
        <div className="flex flex-1">
          <div className="flex justify-center items-center">
            <img
              src={character.iconUrl}
              alt={character.name}
              className="h-16 justify-center flex items-center rounded-tl-md rounded-bl-md"
            />
          </div>

          <div className="flex">
            <div className="flex flex-1 flex-col py-2 px-6 md:py-1">
              <span className="text-left text-sm text-color-50">
                {character.title}
              </span>
              <span className="text-left md:text-sm font-semibold text-white">
                {character.name}
              </span>
              <span className="text-left">{character.description}</span>
            </div>
          </div>
        </div>

        <div className="flex text-color-800 items-center">
          <CharacterStatDisplay stat="HP" value={character.health} />
          <CharacterStatDisplay stat="MN" value={character.mana} />
          <CharacterStatDisplay stat="SPD" value={character.speed} />
          <CharacterStatDisplay stat="MP" value={character.magicalPower} />
          <CharacterStatDisplay stat="PP" value={character.physicalPower} />
          <CharacterStatDisplay
            stat="ATS"
            value={Number(character.attackSpeed).toFixed(2)}
          />
          <div className="xl:flex hidden">
            <CharacterStatDisplay
              stat="MPT"
              value={Number(character.magicProtection).toFixed(1)}
            />
            <CharacterStatDisplay
              stat="PPT"
              value={Number(character.physicalProtection).toFixed(1)}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
