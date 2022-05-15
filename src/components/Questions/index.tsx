import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { H1Light } from "../../assets/styled/base";
import { CreateInterface } from "../../redux/interfaces/Create";
import { AppState } from "../../redux/store";
import { QuestionInterface } from "./../../redux/interfaces/Questions";
import Question from "./question";

const QuestionsCreator = () => {
  const dispatch = useDispatch();
  const post: CreateInterface = useSelector((state: AppState) => state.create);
  const name = post.name;

  const questions: [] = useSelector((state: AppState) => state.questions);

  return (
    <div>
      <H1Light>{name}</H1Light>
      {questions.map((item, key) => (
        <Question data={item} key={key} />
      ))}
    </div>
  );
};

export default QuestionsCreator;
