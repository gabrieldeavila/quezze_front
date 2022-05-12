import { QuestionInterface } from "../interfaces/Questions";

export const SET_QUESTIONS = "SET_QUESTIONS";

interface SetQuestionsActionType {
  type: typeof SET_QUESTIONS;
  payload: QuestionInterface;
}

export type QuestionsActionTypes = SetQuestionsActionType;
