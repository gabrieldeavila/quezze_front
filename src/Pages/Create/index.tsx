import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import BasicInfo from "./BasicInfo";
import { useEffect, useState } from "react";
import { CreateProps } from "./../../redux/interfaces/Create";
import _ from "lodash";
import QuestionCreator from "./QuestionCreator";

export default function Create() {
  const posts: CreateProps = useSelector((state: AppState) => state.create);

  const [showQuestions, setShowQuestions] = useState(false);

  return !showQuestions ? (
    <BasicInfo setShowQuestions={setShowQuestions} />
  ) : (
    <QuestionCreator />
  );
}
