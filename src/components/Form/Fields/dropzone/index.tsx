import React from "react";
import { FieldsProps } from "../../interfaces";
import { InputLabel, InputWrapper } from "../../style";
import { useTranslation } from "react-i18next";

const DropzoneClone = ({
  name,
  child,
  values,
  setValues,
  setFieldTouched,
}: FieldsProps) => {
  const { t } = useTranslation();
  const value = values[name as keyof typeof values];

  const onDrop = (acceptedFiles: any) => {
    setFieldTouched(name, true);
    setValues({ ...values, [name]: acceptedFiles });
  };

  return (
    <InputWrapper>
      <InputLabel for={name}>{t(`form.${name}`)}</InputLabel>

      {/* Clona o elemento e adiciona valores de seleção */}
      {React.cloneElement(child, {
        onDrop,
        value,
      })}
    </InputWrapper>
  );
};

export default DropzoneClone;
