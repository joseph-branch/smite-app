import { Character } from "@prisma/client";

type SelectedCharacterProps = {
  character: Character;
};

/* eslint-disable @next/next/no-img-element */
export const SelectedCharacter: React.FC<SelectedCharacterProps> = ({
  character,
}) => {
  if (!character) {
    return <></>;
  }

  return (
    <div className="flex flex-col bg-color-500 rounded-md">
      <div className="flex justify-start items-start">
        <img
          src={character?.cardUrl}
          alt="Character Image"
          className="flex-1 justify-start flex rounded-tl-md"
        />

        <div className="flex">
          <span className="text-color-50 overflow-auto text-[.825rem] flex-wrap p-4">
            {character.lore}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-2">
        <div className="justify-between flex flex-1">
          <span className="text-color-50">{character.role}</span>
          <span className="text-color-50">{character.pantheon}</span>
          <span className="text-color-50">{character.type}</span>
          <span className="text-color-50">{character.archetype}</span>
        </div>

        <div className="flex flex-1 justify-center items-center py-2">
          <span className="text-color-100 flex-1 rounded-full flex justify-center items-center h-6 w-6">
            Insert Tier Here Example S
          </span>
        </div>
      </div>
    </div>
  );
};
