import React from "react";
import { withFormik } from "formik";
import { FormProps } from "./interfaces";
import _ from "lodash";
import { FormWrapper, InputLabel, InputWrapper } from "./style";
import { useTranslation } from "react-i18next";
import FieldType from "./Fields/findType";

function Basic({
  errors,
  handleSubmit,
  isSubmitting,
  values,
  setFieldValue,
  setFieldTouched,
  children,
  setValues,
}: any) {
  return (
    <FormWrapper mt="2" onSubmit={handleSubmit}>
      {children.map((child: any) => (
        <FieldType {...{ child, setValues, values, isSubmitting, errors }} />
      ))}
    </FormWrapper>
  );
}

const Form = withFormik({
  // adicionando valores iniciais ao componente
  mapPropsToValues: (prop: any) => {
    let initialValues = {};

    prop.children.forEach((child: any) => {
      if (child.type === "input") {
        initialValues = {
          ...initialValues,
          [child.props.name]: "",
        };
      }
    });

    return initialValues;
  },

  // validação dos campos
  validate(values) {
    const errors = {};
    return errors;
  },

  // submissão dos valores
  handleSubmit(values, { props, setSubmitting }) {
    console.log(values, props);

    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  },
})(Basic);

export default Form;