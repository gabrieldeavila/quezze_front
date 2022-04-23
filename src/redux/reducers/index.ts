import { combineReducers } from "redux";
import { setCurrPageReducer } from "./PageReducer";
import { setCreateReducer } from "./CreateReducer";

const rootReducer = combineReducers({
  page: setCurrPageReducer,
  create: setCreateReducer,
});

export default rootReducer;
