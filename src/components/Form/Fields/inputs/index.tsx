import React from "react";
import { FieldsProps } from "../../interfaces";
import { InputLabel, InputWrapper } from "../../style";
import { useTranslation } from "react-i18next";

const Input = ({ name, child, values, setValues }: FieldsProps) => {
  const { t } = useTranslation();
  const value = values[name as keyof typeof values];

  const onChange = (e: any) => {
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
