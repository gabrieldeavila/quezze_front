import React from "react";
import { withFormik } from "formik";
import { FormProps } from "./interfaces";
import _ from "lodash";
import { ChildWrapper, FormWrapper, InputLabel, InputWrapper } from "./style";
import { useTranslation } from "react-i18next";
import FieldType from "./Fields/findType";
import { handleErrors } from "./helpers";
import ValidateError from "./errors/index";

function Basic({
  errors,
  handleSubmit,
  isSubmitting,
  values,
  setFieldTouched,
  children,
  touched,
  setValues,
  action,
}: any) {
  return (
    <FormWrapper mt="2" onSubmit={handleSubmit}>
      {children.map((child: any, key: number) => (
        <ChildWrapper key={key}>
          <FieldType
            {...{
              child,
              setValues,
              values,
              isSubmitting,
              errors,
              setFieldTouched,
              action,
            }}
          />

          {!Object.keys(child.props).includes("buttonActions") && (
            <ValidateError touched={touched} errors={errors} child={child} />
          )}
        </ChildWrapper>
      ))}
    </FormWrapper>
  );
}

const Form = withFormik({
  // adicionando valores iniciais ao componente
  mapPropsToValues: ({ initialValues }: FormProps) => {
    return initialValues;
  },

  // validação dos campos
  async validate(values, props: FormProps) {
    let errors = await handleErrors(values, props);
    return errors;
  },

  // submissão dos valores
  handleSubmit(values, { props, setSubmitting }) {
    setSubmitting(true);
    props.onSubmit(values);
    setSubmitting(false);
  },
})(Basic);

export default Form;
