import { Switch } from "@headlessui/react";
import { useCallback, useState } from "react";

type ToggleButtonProps = {
  option1?: string;
  option2?: string;
  onChange?: (state: boolean) => void;
  checked: boolean;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  option1,
  option2,
  onChange,
  checked,
}) => {
  const [enabled, setEnabled] = useState(checked);

  const onToggleStateChange = useCallback(
    (state: boolean) => {
      setEnabled(state);

      if (onChange) {
        onChange(state);
      }
    },
    [setEnabled, onChange]
  );

  return (
    <div className="flex flex-col flex-1 justify-center items-center text-color-50">
      <div className="flex justify-center items-center gap-2">
        {option1 && option2 && (
          <span className={`${!enabled ? "text-color-50" : "text-color-100"}`}>
            {option1}
          </span>
        )}

        <Switch
          checked={enabled}
          onChange={onToggleStateChange}
          className={`${enabled ? "bg-color-50" : "bg-color-200"}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 border-color-400`}
        >
          <span className="sr-only">Mode Select</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
      pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>

        {option1 && option2 && (
          <span className={`${enabled ? "text-color-50" : "text-color-100"}`}>
            {option2}
          </span>
        )}
      </div>
    </div>
  );
};
