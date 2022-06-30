import { CharacterBuilds } from "./cards/CharacterBuilds";
import { CharacterDetails } from "./cards/CharacterDetails";
import { CharacterModeStats } from "./cards/CharacterModeStats";
import { SelectedCharacter } from "./cards/SelectedCharacter";

export const CharacterView: React.FC = () => {
  return (
    <div className="flex flex-1 gap-10 flex-col">
      <div className="flex flex-1 gap-5 flex-col md:flex-row">
        <SelectedCharacter />
        <CharacterDetails />
      </div>
      <div className="flex flex-1 gap-5 flex-col md:flex-row">
        <CharacterModeStats />
        <CharacterBuilds />
      </div>
    </div>
  );
};
