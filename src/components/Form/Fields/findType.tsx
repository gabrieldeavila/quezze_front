import React from "react";
import { FieldTypeProps } from "../interfaces";
import { InputWrapper } from "../style";
import { InputLabel } from "./../style";
import _ from "lodash";
import Input from "./inputs";
import Select from "./select";
import Button from "./button";

const FieldType = ({
  child,
  setValues,
  values,
  isSubmitting,
  errors,
}: FieldTypeProps) => {
  let name = child.props.name;
  let settings = { name, child, values, setValues };
  console.log(child);
  // quando for um input, clona o elemento e permite que salve o valor
  if (["input", "textarea"].includes(child.type)) {
    return <Input {...settings} />;
  }

  // quando elemento for do tipo ReactSelect
  if (child.props?.options) {
    return <Select {...settings} />;
  }

  // elemento é um dropzone
  if (child.type?.dropzone) {
    console.log("FALTA FZR hehe");
    return <></>;
  }

  // elemento é um botão
  if (child.type?.target === "button") {
    return <Button {...{ isSubmitting, child, errors }} />;
  }

  // retorno default
  return <></>;
};

export default FieldType;
