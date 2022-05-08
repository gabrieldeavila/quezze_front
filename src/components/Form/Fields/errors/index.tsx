import React from "react";
import { useTranslation } from "react-i18next";
import { ErrorProps } from "./../../interfaces";
import { ErrorWrapper } from "./style";

function ValidateError({ errors, touched, child }: ErrorProps) {
  const name = child.props.name;
  const error = errors[name as keyof typeof errors];
  const touchedError = touched[name as keyof typeof touched];
  const { t } = useTranslation();
  const errMsg = t(`yup_validation.${error}`);

  return (
    <ErrorWrapper>
      {error && touchedError ? <span>{errMsg}</span> : <></>}
    </ErrorWrapper>
  );
}

export default ValidateError;
