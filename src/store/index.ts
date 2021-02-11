import { createStore } from "redux";
import { devReducer } from "./dev/reducers";

export const store = createStore(devReducer);