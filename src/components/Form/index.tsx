import React from "react";
import { withFormik } from "formik";
import { FormProps } from "./interfaces";
import _ from "lodash";
import { FormWrapper, InputLabel, InputWrapper } from "./style";
import { useTranslation } from "react-i18next";

function Basic({
  errors,
  handleSubmit,
  isSubmitting,
  values,
  setFieldValue,
  setFieldTouched,
  children,
  setValues,
  ...props
}: any | FormProps) {
  const { t } = useTranslation();

  return (
    <FormWrapper mt="2" onSubmit={handleSubmit}>
      {children.map((child: any) => {
        let name = child.props.name;

        if (child.type === "input") {
          // quando for um input, clona o elemento e permita que salve o valor
          return (
            <InputWrapper>
              <InputLabel for={name}>{t(`form.${name}`)}</InputLabel>

              {React.cloneElement(child, {
                onChange: (e: any) => {
                  setValues({ ...values, [name]: e.target.value });
                },
                value: values[name],
              })}
            </InputWrapper>
          );
        } else if (child.type === "button") {
          // já se for um botão, desabilitar caso haja algum erro ou estiver submetendo os valores
          return React.cloneElement(child, {
            disabled: isSubmitting || !_.isEmpty(errors),
          });
        }
      })}
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
