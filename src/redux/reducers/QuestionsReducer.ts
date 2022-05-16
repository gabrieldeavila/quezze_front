import {
  QuestionInterface,
  setQuestionInterface,
} from "../interfaces/Questions";
import { QuestionsActionTypes } from "../types/QuestionsType";
import { SET_QUESTIONS } from "./../types/QuestionsType";
import _ from "lodash";

const initialStateQuestions = [
  {
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
  },
];

export const questionsReducer = (
  state = initialStateQuestions,
  action: QuestionsActionTypes
): QuestionInterface[] => {
  switch (action.type) {
    case SET_QUESTIONS:
      return setQuestions(state, action.payload);
    default:
      return state;
  }
};

const setQuestions = (
  questions: QuestionInterface[],
  question: QuestionInterface
): QuestionInterface[] => {
  let updatedQuestions = _.map(questions, (item: QuestionInterface) => {
    if (item.id === question.id) {
      return question;
    }

    return item;
  });

  return updatedQuestions;
};
