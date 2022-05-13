import React from "react";
import { QuestionProps } from "./interface";
import Form from "./../Form/index";
import { setQuestion } from "./../../redux/effects/Questions";
import Drop from "../dropzone";

const Question = ({ data }: QuestionProps) => {
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
    </Form>
  );
};

export default Question;
