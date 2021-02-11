import { createStore, combineReducers } from "redux";
import { devReducer, themeReducer } from "./dev/reducers";

const rootReducer = combineReducers({
  devReducer,
  themeReducer,
})

export const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));