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
      <div className="flex bg-color-500 rounded-md cursor-pointer">
        <div className="flex md:flex-row md:justify-center md:items-center">
          <img
            src={character.iconUrl}
            alt={character.name}
            className="justify-center flex items-center rounded-tl-md rounded-bl-md w-16"
          />
        </div>

        <div className="flex flex-1 md:flex-row flex-col cursor-pointer text-sm md:text-base p-2 gap-3">
          <div className="flex md:basis-2/5 items-center">
            <div className="flex flex-col">
              <span className="text-left text-color-50">{character.title}</span>
              <span className="text-left font-semibold text-white">
                {character.name}
              </span>
              <span className="text-left">{character.description}</span>
            </div>
          </div>

          <div className="flex flex-1 text-color-800 items-center text-xs md:text-base">
            <CharacterStatDisplay stat="HP" value={character.health} />
            <CharacterStatDisplay stat="MN" value={character.mana} />
            <CharacterStatDisplay stat="SPD" value={character.speed} />
            <CharacterStatDisplay stat="MP" value={character.magicalPower} />
            <CharacterStatDisplay stat="PP" value={character.physicalPower} />
            <CharacterStatDisplay
              stat="ATS"
              value={Number(character.attackSpeed).toFixed(2)}
            />

            <div className="hidden md:flex md:flex-1">
              <CharacterStatDisplay
                stat="MPT"
                value={Number(character.magicProtection).toFixed(1)}
              />
            </div>

            <div className="hidden md:flex md:flex-1">
              <CharacterStatDisplay
                stat="PPT"
                value={Number(character.physicalProtection).toFixed(1)}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
