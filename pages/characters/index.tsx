import { CharacterStats } from "../../src/components/characters/cards/CharacterStats";

export const CharactersPage: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-3">
      {Array.from(Array(15)).map((a, index) => (
        <CharacterStats />
      ))}
    </div>
  );
};

export default CharactersPage;
