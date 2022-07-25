import { CharacterView } from "../../../src/components/characters/CharacterView";
import { useRouter } from "next/router";

export const CharacterPage: React.FC = () => {
  const { query } = useRouter();

  return (
    <>
      <CharacterView characterId={parseInt(query?.characterId as string)} />
    </>
  );
};

export default CharacterPage;
