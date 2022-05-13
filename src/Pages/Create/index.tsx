import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import BasicInfo from "./BasicInfo";
import { useEffect, useState } from "react";
import { CreateInterface } from "./../../redux/interfaces/Create";
import _ from "lodash";
import QuestionsCreator from "../../components/Questions";

export default function Create() {
  const [showQuestions, setShowQuestions] = useState(false);

  return !showQuestions ? (
    <BasicInfo setShowQuestions={setShowQuestions} />
  ) : (
    <QuestionsCreator />
  );
}
