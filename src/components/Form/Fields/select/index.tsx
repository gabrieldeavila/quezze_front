import React from "react";
import _ from "lodash";
import { InputWrapper } from "../../style";
import { InputLabel } from "./../../style";
import { useTranslation } from "react-i18next";
import { FieldsProps } from "../../interfaces";
import { SelectStyle, NoOptionsMessage } from "./style";
import { useDispatch } from "react-redux";

const Select = ({
  name,
  child,
  values,
  setValues,
  setFieldTouched,
  action,
}: FieldsProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChange = (e: any) => {
    setFieldTouched(name, true);
    dispatch(action({ ...values, [name]: e.value }));
    setValues({ ...values, [name]: e.value });
  };

  const styles = SelectStyle;
  const components = { NoOptionsMessage };

  const placeholder = t("form.select");

  return (
    <InputWrapper removeBoxShadow>
      <InputLabel for={name}>{t(`form.${name}`)}</InputLabel>

      {React.cloneElement(child, {
        onChange,
        styles,
        components,
        placeholder,
      })}
    </InputWrapper>
  );
};

export default Select;
