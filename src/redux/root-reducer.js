import { combineReducers } from "redux";
import { filterReducer } from "./filter/reducer";
import { positionReducer } from "./positions/reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
