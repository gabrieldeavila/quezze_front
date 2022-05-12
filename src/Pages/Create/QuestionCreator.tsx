import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { H1Light } from "../../assets/styled/base";
import { CreateProps } from "../../redux/interfaces/Create";
import { AppState } from "../../redux/store";
import { QuestionInterface } from "./../../redux/interfaces/Questions";

function QuestionCreator() {
  const dispatch = useDispatch();
  const post: CreateProps = useSelector((state: AppState) => state.create);
  const name = post.create.name;

  const questions = useSelector((state: AppState) => state.questions);

  console.log(questions);

  return (
    <div>
      <H1Light>{name}</H1Light>
    </div>
  );
}

export default QuestionCreator;
