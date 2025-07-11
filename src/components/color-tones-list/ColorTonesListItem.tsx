import React from "react";

//**Types */
import type {
  InputModel,
  HandleCheckedType,
  CheckedCallbackStateType,
} from "@/common-types/PaletteTypes";

interface ColorTonesListItemProps {
  colorsOrTones: InputModel;
  item_name?: string;
  handleChecked: HandleCheckedType;
  setCheckedColors: CheckedCallbackStateType;
}

const ColorTonesListItem: React.FC<ColorTonesListItemProps> = ({
  colorsOrTones,
  item_name = "colors",
  handleChecked,
  setCheckedColors,
}) => {
  return (
    <ul className="list-none capitalize mb-8">
      {Object.entries(colorsOrTones).map(([color_tone]) => (
        <li key={color_tone}>
          <input
            type="checkbox"
            id={color_tone}
            name={item_name}
            value={color_tone}
            className="mr-2"
            onChange={(e) =>
              handleChecked(e.target.value, e.target.checked, setCheckedColors)
            }
          />
          <label htmlFor={color_tone}>{color_tone}</label>
        </li>
      ))}
    </ul>
  );
};

export default ColorTonesListItem;
