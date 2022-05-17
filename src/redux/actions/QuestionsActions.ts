import _ from "lodash";
import {
  ADD_QUESTION,
  QuestionsActionTypes,
  SET_QUESTIONS,
} from "../types/QuestionsType";
import { QuestionInterface } from "./../interfaces/Questions";

export const setQuestionsAction = (
  question: QuestionInterface
): QuestionsActionTypes => {
  return {
    type: SET_QUESTIONS,
    payload: question,
  };
};

export const addQuestionsAction = (): QuestionsActionTypes => {
  return {
    type: ADD_QUESTION,
    payload: generateQuestions(),
  };
};

const generateQuestions = () => {
  return {
    title: "",
    options: [
      { label: "", selected: false },
      { label: "", selected: false },
      { label: "", selected: false },
      { label: "", selected: false },
      { label: "", selected: false },
    ],
    time: 0,
    image: undefined,
    id: _.uniqueId(),
  };
};
