import { useState } from "react";
import { Build } from "../../builds/cards/Build";
import { ToggleButton } from "../../common/ToggleButton";

export const CharacterBuilds: React.FC = () => {
  const [mode, setMode] = useState<boolean>(false);

  return (
    <div className="flex flex-1 flex-col rounded gap-3">
      <div className="flex flex-1">
        <ToggleButton
          option1="Top Rated"
          option2="Most Recent"
          onChange={setMode}
          checked={mode}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <Build
          buildAuthor="Gaurdian241"
          buildDescription="Win Percentage Chart"
          items={[
            "Lifesteal",
            "Cooldown",
            "Joust",
            "Casual",
            "Something",
            "Other",
          ]}
          tags={["Lifesteal", "Casual", "Something"]}
        />
        <Build
          buildAuthor="Gaurdian241"
          buildDescription="Win Percentage Chart"
          items={[
            "Lifesteal",
            "Cooldown",
            "Joust",
            "Casual",
            "Something",
            "Other",
          ]}
          tags={["Lifesteal", "Cooldown", "Joust"]}
        />
        <Build
          buildAuthor="Gaurdian241"
          buildDescription="Win Percentage Chart"
          items={[
            "Lifesteal",
            "Cooldown",
            "Joust",
            "Casual",
            "Something",
            "Other",
          ]}
          tags={["Lifesteal", "Cooldown", "Joust"]}
        />
      </div>
    </div>
  );
};
