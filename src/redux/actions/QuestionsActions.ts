import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { CreateInterface } from "../interfaces/Create";
import { AppState } from "../store";
import { QuestionsActionTypes, SET_QUESTIONS } from "../types/QuestionsType";
import { QuestionInterface } from "./../interfaces/Questions";

export const setQuestionsAction = (
  question: QuestionInterface
): QuestionsActionTypes => {
  return {
    type: SET_QUESTIONS,
    payload: question,
  };
};
