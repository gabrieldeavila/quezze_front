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

  useEffect(() => {
    console.log(!_.isEmpty(posts.create.name));
    if (!_.isEmpty(posts.create.name)) {
      setShowQuestions(true);
    }
  }, [posts]);

  return !showQuestions ? <BasicInfo /> : <QuestionCreator />;
}
