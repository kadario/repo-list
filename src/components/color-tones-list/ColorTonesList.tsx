//**Components */
import ErrorMessage from "@/components/error-message/ErrorMessage";
import ColorTonesListItem from "./ColorTonesListItem";

//**Types */
import type { InputModel, ToneCallbackData } from "@/common-types/PaletteTypes";

type State = (update: (prev: string[]) => string[]) => void;
type HandleCheckedType = (
  name: string,
  checked: boolean,
  stateCallback: State
) => void;

interface ColorTonesListProps {
  colorsOrTones: InputModel | ToneCallbackData;
  handleChecked: HandleCheckedType;
  setCheckedColors: State;
  error?: string | null;
}

const ColorTonesList: React.FC<ColorTonesListProps> = ({
  colorsOrTones,
  handleChecked,
  setCheckedColors,
  error = null,
}) => {
  return (
    <>
      <h3 className="mb-4 text-2xl text-gray-400">
        Select your favorite colors:
      </h3>
      {error && <ErrorMessage error={error} />}
      <ColorTonesListItem
        colorsOrTones={colorsOrTones as InputModel | ToneCallbackData}
        handleChecked={handleChecked}
        setCheckedColors={setCheckedColors}
      />
    </>
  );
};

export default ColorTonesList;
