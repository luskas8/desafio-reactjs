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

export const ADD_DEV = 'ADD_DEV';
export const DELETE_DEV = 'DELETE_DEV';

export const THEME_DARK = 'THEME_DARK';
export const THEME_LIGHT = 'THEME_LIGHT';

export interface AddDevAction {
    type: typeof ADD_DEV,
    payload: iDev,
}

export interface DeleteDevAction {
    type: typeof DELETE_DEV,
    meta: {
        index: number,
    }
}

export type DevActionTypes = AddDevAction | DeleteDevAction;