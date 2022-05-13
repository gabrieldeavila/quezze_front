import React from "react";
import { FieldsProps } from "../../interfaces";
import { InputLabel, InputWrapper } from "../../style";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const Input = ({
  name,
  child,
  values,
  setValues,
  setFieldTouched,
  action,
}: FieldsProps) => {
  const { t } = useTranslation();
  const value = values[name as keyof typeof values];
  const dispatch = useDispatch();

  const onChange = (e: any) => {
    setFieldTouched(name, true);
    dispatch(action({ ...values, [name]: e.target.value }));
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <InputWrapper>
      <InputLabel for={name}>{t(`form.${name}`)}</InputLabel>

      {/* Clona o elemento e adiciona valores de seleção */}
      {React.cloneElement(child, {
        value,
        onChange,
      })}
    </InputWrapper>
  );
};

export default Input;
