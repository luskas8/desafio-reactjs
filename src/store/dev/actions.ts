import { iDev, ADD_DEV, DELETE_DEV, DevActionTypes } from "./types";

export function addDev(newDev: iDev): DevActionTypes {
    return {
        type: ADD_DEV,
        payload: newDev,
    }
}

export function deleteDev(index: number): DevActionTypes {
    return {
        type: DELETE_DEV,
        meta: {
            index,
        }
    }
}