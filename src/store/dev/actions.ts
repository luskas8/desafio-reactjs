import {
  iDev,
  ADD_DEV,
  DELETE_DEV,
  DevActionTypes,
  DarkThemeAction,
  THEME_DARK,
  LightThemeAction,
  THEME_LIGHT,
} from "./types";

export function addDev(newDev: iDev): DevActionTypes {
  return {
    type: ADD_DEV,
    payload: newDev,
  };
}

export function deleteDev(index: number): DevActionTypes {
  return {
    type: DELETE_DEV,
    meta: {
      index,
    },
  };
}

export function darkTheme(): DarkThemeAction {
  return {
    type: THEME_DARK,
  };
}

export function lightTheme(): LightThemeAction {
  return {
    type: THEME_LIGHT,
  };
}
