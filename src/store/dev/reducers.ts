import { DevState, DevActionTypes, ADD_DEV, DELETE_DEV } from "./types";

const devInitialState: DevState = {
    devs: [],
};

export function devReducer(state = devInitialState, action: DevActionTypes): DevState {
    switch (action.type) {
        case ADD_DEV:
            return {
                devs: [...state.devs, action.payload],
            };
        case DELETE_DEV:
            return {
                devs: state.devs.filter(
                    dev => dev.id !== action.meta.index
                ),
            };
        default:
            return state;
    }
};