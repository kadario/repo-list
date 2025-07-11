import type { InputModel, ColorData, ToneCallbackData } from "@/common-types/PaletteTypes";

export const inputColorsData = {
    red: {
      main: "red",
      dark: "darkred",
      light: "lightred",
      extra: "extrared",
    },
    green: {
      main: "green",
      dark: "darkgreen",
      light: "lightgreen",
      extra: "extragreen",
    },
    blue: {
      main: "blue",
      dark: "darkblue",
      light: "lightblue",
      extra: "extrablue",
    },
    yellow: {
      main: "yellow",
      dark: "darkyellow",
      light: "lightyellow",
      extra: "extrayellow",
    },
  } satisfies InputModel;



export const inputTonesCallbackData = {
  brightness: {
    callback: (data: ColorData) => ({ 
      foreground: data.main,
      customProp: "#f0f0f0",
    }),
    subtone: {
      low: (data: ColorData) => ({ white: data.light }),
      medium: (data: ColorData) => ({ shadow: data.main }),
      high: (data: ColorData) => ({
        someProp: "transparent",
        anotherProp: "#fff",
        thirdCustomProp: data.main,
      }),
      ultra: (data: ColorData) => ({ intensive: data.extra }),
    }
  },
  depth:  {
    callback: (data: ColorData) => ({
      background: data.light,
      foreground: data.main,
      color: data.extra,
    }),
    subtone: {
      "8-bit": (data: ColorData) => ({
        borderColor: data.main,
      }),
      "16-bit": (data: ColorData) => ({
        borderColor: data.main,
        anotherColor: data.light,
      }),
      "24-bit": (data: ColorData) => ({
        extraColor: data.extra,
      }),
    }
  },
} satisfies ToneCallbackData;
