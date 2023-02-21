import { ADD_POSITION } from "./constants";

export const addPosition = (positions) => ({
  type: ADD_POSITION,
  positions,
});
