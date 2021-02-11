export interface iDev {
  id: number;
  name: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
  login: string;
}

export interface DevState {
  devs: iDev[];
}

export const ADD_DEV = "ADD_DEV";
export const DELETE_DEV = "DELETE_DEV";

export interface AddDevAction {
  type: typeof ADD_DEV;
  payload: iDev;
}

export interface DeleteDevAction {
  type: typeof DELETE_DEV;
  meta: {
    index: number;
  };
}

export type DevActionTypes = AddDevAction | DeleteDevAction;

export interface ThemeState {
  theme: string;
}

export const THEME_DARK = "THEME_DARK";
export const THEME_LIGHT = "THEME_LIGHT";

export interface DarkThemeAction {
  type: typeof THEME_DARK;
}

export interface LightThemeAction {
  type: typeof THEME_LIGHT;
}

export type ThemeActionTypes = DarkThemeAction | LightThemeAction;

export interface Store {
	devReducer: {
		devs: iDev[];
	};
	themeReducer: {
		theme: string;
	}
}