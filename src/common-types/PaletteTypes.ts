import type {
  ColorsType,
  ColorsBrightness,
  ColorsLowBrightness,
  ColorsMediumBrightness,
  ColorsHighBrightness,
  ColorsUltraBrightness,
  ColorsDepth,
  Colors8BitDepth,
  Colors16BitDepth,
  Colors24BitDepth
} from "./ColorTypes"



export type ColorsUnion = 'red' | 'green' | 'blue' | 'yellow';
export type ColorData = {
  main: string;
  dark: string;
  light: string;
  extra: string;
};

export type InputModel = Partial<Record<ColorsUnion, ColorData>>

export type BaseColorType<T = string> = {
  [key: string]: T extends BaseColorType ? string | BaseColorType : string;
};

export type ToneSetupCallbackType<T> = (data: T) =>  BaseColorType;

export type ToneSetupType = {
  name: string;
  subtone: Record<string, ToneSetupCallbackType<ColorData>>;
};

export type PalleteBaseType = ToneSetupCallbackType<Partial<Record<ColorsUnion, ColorData>>>
export type TonesType = {
  [key: string]: ToneSetupCallbackType<InputModel>;
}

export type PaletteSetupType = {
  base: PalleteBaseType;
  tones?: TonesType;
} | null;

export type PaletteResultTypeBlue = {
  blue: ColorsType
}

export type PaletteResultTypeRed = {
  red: ColorsType
}

export type PaletteResultTypeGreen = {
  green: ColorsType
}

export type PaletteResultTypeYellow = {
  yellow: ColorsType
}

export type PaletteResultTypeBlueDepth = {
  blue_depth: ColorsDepth;
  'blue_8-bit_depth': Colors8BitDepth;
  'blue_16-bit_depth': Colors16BitDepth;
  'blue_24-bit_depth': Colors24BitDepth;
};

export type PaletteResultTypeBlueBrightness = {
  blue_brightness: ColorsBrightness;
  blue_low_brightness: ColorsLowBrightness;
  blue_medium_brightness: ColorsMediumBrightness;
  blue_high_brightness: ColorsHighBrightness;
  blue_ultra_brightness: ColorsUltraBrightness;
}

export type PaletteResultTypeGreenDepth = {
  green_depth: ColorsDepth;
  'green_8-bit_depth': Colors8BitDepth;
  'green_16-bit_depth': Colors16BitDepth;
  'green_24-bit_depth': Colors24BitDepth;
};

export type PaletteResultTypeGreenBrightness = {
  green_brightness: ColorsBrightness;
  green_low_brightness: ColorsLowBrightness;
  green_medium_brightness: ColorsMediumBrightness;
  green_high_brightness: ColorsHighBrightness;
  green_ultra_brightness: ColorsUltraBrightness;
}

export type PaletteResultTypeRedDepth = {
  red_depth: ColorsDepth;
  'red_8-bit_depth': Colors8BitDepth;
  'red_16-bit_depth': Colors16BitDepth;
  'red_24-bit_depth': Colors24BitDepth;
};

export type PaletteResultTypeRedBrightness = {
  red_brightness: ColorsBrightness;
  red_low_brightness: ColorsLowBrightness;
  red_medium_brightness: ColorsMediumBrightness;
  red_high_brightness: ColorsHighBrightness;
  red_ultra_brightness: ColorsUltraBrightness;
}

export type PaletteResultTypeYellowDepth = {
  yellow_depth: ColorsDepth;
  'yellow_8-bit_depth': Colors8BitDepth;
  'yellow_16-bit_depth': Colors16BitDepth;
  'yellow_24-bit_depth': Colors24BitDepth;
};

export type PaletteResultTypeYellowBrightness = {
  yellow_brightness: ColorsBrightness;
  yellow_low_brightness: ColorsLowBrightness;
  yellow_medium_brightness: ColorsMediumBrightness;
  yellow_high_brightness: ColorsHighBrightness;
  yellow_ultra_brightness: ColorsUltraBrightness;
}

export type PaletteResultType = Partial<PaletteResultTypeBlue & 
                                PaletteResultTypeRed & 
                                PaletteResultTypeGreen & 
                                PaletteResultTypeYellow & 
                                PaletteResultTypeBlueDepth & 
                                PaletteResultTypeBlueBrightness &
                                PaletteResultTypeRedDepth & 
                                PaletteResultTypeRedBrightness &
                                PaletteResultTypeGreenDepth & 
                                PaletteResultTypeGreenBrightness &
                                PaletteResultTypeYellowDepth & 
                                PaletteResultTypeYellowBrightness>;

export type CheckedCallbackStateType = (update: (prev: string[]) => string[]) => void;

export type HandleCheckedType = (
  name: string,
  checked: boolean,
  stateCallback: CheckedCallbackStateType
) => void;

export type ToneData = {
  [tone: string]: {
    callback: (data: ColorData) => BaseColorType<string>;
    subtone: {
      [subtoneName: string]: (data: ColorData) => BaseColorType<string>;
    };
  };
};

export type ToneSetupSubtoneType<T> = {
  [subtoneName: string]: ToneSetupCallbackType<T>;
};

export type ToneCallbackData = {
  [toneName: string]: {
    callback: ToneSetupCallbackType<ColorData>;
    subtone: ToneSetupSubtoneType<ColorData>;
  };
};