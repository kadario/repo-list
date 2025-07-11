import type { 
  ColorData, 
  ToneSetupType, 
  BaseColorType, 
  ToneSetupCallbackType,
  InputModel,
  PaletteSetupType,
  PaletteResultType,
} from '@/common-types/PaletteTypes';


/**
 * Subtones constructor / Конструктор для создания подтонов
 * @param colorName - color name (color index of colors object) / имя цвета (индекс объекта цветов)
 * @param colorValue - color value (object of colors) / значение цвета (объект цветов)
 * @param tone - subtone (object with settings for subtone) / подтон (объект с настройками для подтонов)
 * @param colorsFromCallback - object with colors, returned from callback / объект с цветами, который вернул колбэк
 * @returns object with subtones / объект с подтонами
 */
function subtoneConstructor(
  colorName: string, 
  colorValue: ColorData, 
  tone: ToneSetupType, 
  colorsFromCallback: BaseColorType): BaseColorType 
{
  const colorsTone: BaseColorType = {};

  Object.assign(colorsTone, {[`${colorName}_${tone.name}`]: colorsFromCallback});

  for(const subtoneName in tone.subtone) {
    const subtoneCallback: ToneSetupCallbackType<ColorData> = tone.subtone[subtoneName];
    const subtoneIndex: string = `${colorName}_${subtoneName}_${tone.name}`;

    Object.assign(colorsTone, {[subtoneIndex]: subtoneCallback(colorValue)});
  }

  return colorsTone;
}


/**
 * Функция для создания тона
 * @param toneSetupCallback - колбэк для создания подтонов, возвращает объект с цветами
 * @param toneSetup - настройки подтонов, если не передан, то подтонов не будет
 * @returns колбэк для создания подтонов
 */
export function createTone(toneSetupCallback: ToneSetupCallbackType<ColorData>, toneSetup?: ToneSetupType): ToneSetupCallbackType<InputModel> {
  return (baseColors: InputModel) => {
    let toneResult: { [key: string]: string | BaseColorType } = {};

    for (const colorName in baseColors) {
      const colorValue = baseColors[colorName as keyof InputModel];
      
      if (colorValue !== undefined) {
        const colorsFromCallback = toneSetupCallback(colorValue);
        
        if (toneSetup) {
          toneResult = {
            ...toneResult,
            ...subtoneConstructor(colorName, colorValue, toneSetup, colorsFromCallback),
          };
        } else {
          toneResult[colorName] = {
            ...colorValue,
            ...colorsFromCallback,
          };
        }
      }

    }

    return toneResult;
  };
}

/**
 * Palette creation function / Функция для создания палитры
 * @param colorsData - basic color object for palette / изначальный объект с цветами для создания палитры
 * @param paletteSetup - palette settings, if empty - palette will not be created / настройки палитры, если не передан, то палитра не будет
 * @returns palette result or basic colors data object / объект с палитрой или объект с переданными изначально цветами
 */
export function createPalette(colorsData: InputModel, paletteSetup: PaletteSetupType = null): PaletteResultType {
  if (paletteSetup) {
    const baseData = paletteSetup?.base(colorsData);
    const tones = paletteSetup?.tones;

    let result = {};

    if (baseData) {
      result = {
        ...baseData,
      };
    }

    if (tones && Object.entries(tones).length > 0) {
      for (const tone in tones) {
        result = {
          ...result,
          ...tones[tone](colorsData)
        }
      }
    }

    return result;
  }

  return colorsData;
}