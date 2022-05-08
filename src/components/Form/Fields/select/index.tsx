import React from "react";
import _ from "lodash";
import { InputWrapper } from "../../style";
import { InputLabel } from "./../../style";
import { useTranslation } from "react-i18next";
import { FieldsProps } from "../../interfaces";
import { SelectStyle } from "./style";

const Select = ({
  name,
  child,
  values,
  setValues,
  setFieldTouched,
}: FieldsProps) => {
  const { t } = useTranslation();

  const onChange = (e: any) => {
    setFieldTouched(name, true);
    setValues({ ...values, [name]: e.value });
  };

  const styles = SelectStyle;

  return (
    <InputWrapper removeBoxShadow>
      <InputLabel for={name}>{t(`form.${name}`)}</InputLabel>

      {React.cloneElement(child, {
        onChange,
        styles,
      })}
    </InputWrapper>
  );
};

export default Select;
