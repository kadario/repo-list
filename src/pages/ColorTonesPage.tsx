import { useState } from "react";
import type { FormEvent } from "react";

//**Components  */
import Button from "@/components/button/Button";
import CodeSnippet from "@/components/code-snippet/CodeSnippet";
import ColorTonesList from "@/components/color-tones-list/ColorTonesList";

//**Types */
import type {
  InputModel,
  ToneSetupCallbackType,
  PaletteResultType,
  HandleCheckedType,
  CheckedCallbackStateType,
  ToneData,
} from "@/common-types/PaletteTypes";

//**Utils */
import { createTone, createPalette } from "@/utils/palette";
import {
  inputColorsData,
  inputTonesCallbackData,
} from "@/utils/colorsTonesData";

const ColorTonesPage = () => {
  const [checkedColors, setCheckedColors] = useState<string[]>([]);
  const [checkedTones, setCheckedTones] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [palette, setPalette] = useState<PaletteResultType | InputModel | null>(
    null
  );

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkedColors.length === 0) {
      setError("Please select at least one color");
      return;
    } else {
      setError(null);
    }

    const mappedColors: InputModel = {};
    const mappedTones: ToneData = {};

    for (const color of checkedColors) {
      mappedColors[color as keyof InputModel] = {
        ...inputColorsData[color as keyof InputModel],
      };
    }

    for (const tone of checkedTones) {
      mappedTones[tone] = {
        ...inputTonesCallbackData[tone as keyof typeof inputTonesCallbackData],
      };
    }

    const baseColors: ToneSetupCallbackType<InputModel> = createTone(
      (data) => ({
        background: data.main,
        color: data.main,
      })
    );

    const basic_colors = baseColors(mappedColors);
    console.log("baseColors: ", basic_colors);

    let tones = {};

    for (const tone in mappedTones) {
      const set_tone = createTone(mappedTones[tone].callback, {
        name: tone,
        subtone: mappedTones[tone].subtone,
      });

      console.log("new tone:", tone, set_tone(mappedColors));

      tones = {
        ...tones,
        [tone]: set_tone,
      };
    }

    const colors: PaletteResultType | InputModel = createPalette(mappedColors, {
      base: baseColors,
      tones: {
        ...tones,
      },
    });

    console.log("color:", colors);
    setPalette(colors);
  };

  const handleChecked: HandleCheckedType = (
    name: string,
    checked: boolean,
    stateCallback: CheckedCallbackStateType
  ): void => {
    stateCallback((prev: string[]) => {
      if (checked) {
        return [...prev, name];
      } else {
        return prev.filter((color) => color !== name);
      }
    });
  };

  return (
    <div className="mt-24">
      <div className="flex flex-col md:flex-row w-full">
        <div className="basis-1 md:basis-1/3 p-2">
          <h1 className="text-4xl font-semibold">Color tones</h1>
          <form onSubmit={handleFormSubmit} className="mt-4">
            <ColorTonesList
              colorsOrTones={inputColorsData}
              handleChecked={handleChecked}
              setCheckedColors={setCheckedColors}
              error={error}
            />

            <ColorTonesList
              colorsOrTones={inputTonesCallbackData}
              handleChecked={handleChecked}
              setCheckedColors={setCheckedTones}
            />

            <Button text="Submit" />
          </form>
        </div>
        <div className="basis-1 md:basis-2/3 p-2">
          {palette && <CodeSnippet code={JSON.stringify(palette, null, 2)} />}
        </div>
      </div>
    </div>
  );
};

export default ColorTonesPage;
