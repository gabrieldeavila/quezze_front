import { QuestionInterface } from "./../interfaces/Questions";
import { Dispatch } from "react";
import { QuestionsActionTypes } from "../types/QuestionsType";
import {
  addQuestionsAction,
  setQuestionsAction,
} from "./../actions/QuestionsActions";

export const setQuestion = (updateValues: QuestionInterface) => {
  return function (dispatch: Dispatch<QuestionsActionTypes>) {
    dispatch(setQuestionsAction(updateValues));
  };
};

export const addQuestion = () => {
  return function (dispatch: Dispatch<QuestionsActionTypes>) {
    dispatch(addQuestionsAction());
  };
};
