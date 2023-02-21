import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
