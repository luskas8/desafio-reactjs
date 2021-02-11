import { DevState, DevActionTypes, ADD_DEV, DELETE_DEV, ThemeState, ThemeActionTypes, THEME_DARK, THEME_LIGHT } from "./types";

const devInitialState: DevState = {
  devs: [],
};

const themeInicialState: ThemeState = {
  theme: "DARK",
}

export function devReducer(
  state = devInitialState,
  action: DevActionTypes
): DevState {
  switch (action.type) {
    case ADD_DEV:
      return {
        devs: [...state.devs, action.payload],
      };
    case DELETE_DEV:
      return {
        devs: state.devs.filter((dev) => dev.id !== action.meta.index),
      };
    default:
      return state;
  }
}

export function themeReducer(
  state = themeInicialState,
  action: ThemeActionTypes
): ThemeState {
  switch(action.type) {
    case THEME_DARK:
      return {
        theme: 'DARK',
      }
    case THEME_LIGHT:
      return {
        theme: 'LIGHT',
      }
    default:
      return state;
  }
}