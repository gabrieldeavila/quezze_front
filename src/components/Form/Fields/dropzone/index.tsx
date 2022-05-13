import React from "react";
import { FieldsProps } from "../../interfaces";
import { InputLabel, InputWrapper } from "../../style";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const DropzoneClone = ({
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

  const onDrop = (file: any) => {
    setFieldTouched(name, true);

    dispatch(action({ ...values, [name]: file }));
    setValues({ ...values, [name]: file });
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
