import { useState } from "react";
import { ToggleButton } from "../../common/ToggleButton";

export const CharacterModeStats: React.FC = () => {
  const [mode, setMode] = useState<boolean>(false);

  return (
    <div className="flex flex-col rounded px-2 gap-3">
      <div className="flex lg:w-72">
        <ToggleButton
          option1="Ranked"
          option2="Casual"
          onChange={setMode}
          checked={mode}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="py-5 bg-color-300 rounded flex flex-1 justify-center items-center">
          <span className="text-color-50 p-2">Win Percentage Chart</span>
        </div>
        <div className="py-5 bg-color-300 rounded flex flex-1 justify-center items-center">
          <span className="text-color-50 p-2">Pick Percentage Chart</span>
        </div>
        <div className="py-5 bg-color-300 rounded flex flex-1 justify-center items-center">
          <span className="text-color-50 p-2">
            Character Competitive Rank Chart
          </span>
        </div>
        <div className="py-5 bg-color-300 rounded flex flex-1 justify-center items-center">
          <span className="text-color-50 p-2">
            Character Competitive Rank Chart
          </span>
        </div>
      </div>
    </div>
  );
};
