import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { H1Light } from "../../assets/styled/base";
import { apiQuezze } from "../../axios";
import { QuestionInterface } from "../../redux/interfaces/Questions";
import { initialStateSetCreate } from "../../redux/reducers/CreateReducer";
import { CreateInterface } from "./../../redux/interfaces/Create";

function Play() {
  const { id } = useParams();
  const [create, setCreate] = useState<CreateInterface>(initialStateSetCreate);
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);

  useEffect(() => {
    apiQuezze
      .get("/get-quiz", { params: { id } })
      .then((res) => {
        setCreate(res.data.create);
        setQuestions(res.data.questions);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    console.log({ questions, create });
  }, [questions, create]);

  return (
    <div>
      <H1Light>{create.name}</H1Light>
    </div>
  );
}

export default Play;
