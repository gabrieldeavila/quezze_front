import { QuestionInterface } from "../interfaces/Questions";
import { QuestionsActionTypes } from "../types/QuestionsType";
import { SET_QUESTIONS } from "./../types/QuestionsType";

const initialStateQuestions = [
  { questionTitle: "", options: [], time: 0, image: undefined },
];
export const questionsReducer = (
  state = initialStateQuestions,
  action: QuestionsActionTypes
): QuestionInterface[] => {
  switch (action.type) {
    case SET_QUESTIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};
