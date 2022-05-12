import { combineReducers } from "redux";
import { setCurrPageReducer } from "./PageReducer";
import { setCreateReducer } from "./CreateReducer";
import { questionsReducer } from "./QuestionsReducer";

const rootReducer = combineReducers({
  page: setCurrPageReducer,
  create: setCreateReducer,
  questions: questionsReducer,
});

export default rootReducer;
