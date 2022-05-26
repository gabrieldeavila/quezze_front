import React, { useCallback } from "react";
import { QuestionProps } from "./interface";
import Form from "./../Form/index";
import { addQuestion, setQuestion } from "./../../redux/effects/Questions";
import Drop from "../dropzone";
import { useTranslation } from "react-i18next";
import {
  Button,
  ButtonGroup,
  H1Light,
  Slice,
} from "./../../assets/styled/base";
import Options from "./../options/index";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { CreateInterface } from "../../redux/interfaces/Create";

const Question = ({ data, last, position }: QuestionProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const questions: [] = useSelector((state: AppState) => state.questions);
  const create: CreateInterface = useSelector(
    (state: AppState) => state.create
  );

  const handleSubmit = useCallback(() => {
    console.log(create, questions);
  }, [questions, create]);

  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  return (
    <>
      <H1Light>#{position}</H1Light>
      <Form
        initialValues={data}
        action={setQuestion}
        schema="question"
        onSubmit={handleSubmit}
      >
        <input type="text" name="title" />
        <Options data={data} optionsField name="options" />
        <input type="number" name="time" />
        <Drop dropzone name="image" />

        <ButtonGroup buttonActions>
          <>
            {last && (
              <>
                <Button className="inline" onClick={handleAddQuestion}>
                  {t("create.add")}
                </Button>
                <Button className="inline" type="submit">
                  {t("create.ready")}
                </Button>
              </>
            )}
          </>
        </ButtonGroup>
      </Form>

      {!last && <Slice />}
    </>
  );
};

export default Question;
