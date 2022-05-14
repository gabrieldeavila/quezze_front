import React from "react";
import { QuestionProps } from "./interface";
import Form from "./../Form/index";
import { setQuestion } from "./../../redux/effects/Questions";
import Drop from "../dropzone";
import { useTranslation } from "react-i18next";
import { Button } from "./../../assets/styled/base";

const Question = ({ data }: QuestionProps) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    console.log("aaa");
  };

  return (
    <Form
      initialValues={data}
      action={setQuestion}
      schema="create"
      onSubmit={handleSubmit}
    >
      <input type="text" name="title" />
      <input type="number" name="time" />
      <Drop dropzone name="image" />
      <Button type="submit">{t("create.button")}</Button>
      <Button type="submit">{t("create.button")}</Button>
    </Form>
  );
};

export default Question;
