import React from "react";
import { QuestionProps } from "./interface";
import Form from "./../Form/index";
import { setQuestion } from "./../../redux/effects/Questions";
import Drop from "../dropzone";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "./../../assets/styled/base";
import Options from "./../options/index";

const Question = ({ data }: QuestionProps) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    console.log("aaa");
  };

  const handleAddQuestion = () => {
    console.log("adicionar questão, vamo ter que criar um redux aaaa");
  };

  return (
    <Form
      initialValues={data}
      action={setQuestion}
      schema="create"
      onSubmit={handleSubmit}
    >
      <input type="text" name="title" />
      <Options data={data} optionsField name="options" />
      <input type="number" name="time" />
      <Drop dropzone name="image" />
      <ButtonGroup buttonActions>
        <Button className="inline" onClick={handleAddQuestion} type="submit">
          {t("create.add")}
        </Button>
        <Button className="inline" type="submit">
          {t("create.ready")}
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default Question;
