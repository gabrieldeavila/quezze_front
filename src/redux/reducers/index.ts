import { combineReducers } from "redux";
import { setCurrPageReducer } from "./PageReducer";

const rootReducer = combineReducers({
  page: setCurrPageReducer,
});

export default rootReducer;
