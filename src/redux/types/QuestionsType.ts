import { QuestionInterface } from "../interfaces/Questions";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

interface SetQuestionsActionType {
  type: typeof SET_QUESTIONS;
  payload: QuestionInterface;
}

interface AddQuestionsActionType {
  type: typeof ADD_QUESTION;
  payload: QuestionInterface;
}

export type QuestionsActionTypes =
  | SetQuestionsActionType
  | AddQuestionsActionType;
