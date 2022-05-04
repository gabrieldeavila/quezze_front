import React from "react";
import _ from "lodash";
import { InputWrapper } from "../../style";
import { InputLabel } from "./../../style";
import { useTranslation } from "react-i18next";
import { FieldsProps } from "../../interfaces";
import { SelectStyle } from "./style";

const Select = ({ name, child, values, setValues }: FieldsProps) => {
  const { t } = useTranslation();

  let translate = child.props["data-translate"];
  let options = child.props["data-options"];

  let label = _.find(child.props.options, {
    value: values[name as keyof typeof values],
  })?.label;

  const onChange = (e: any) => {
    setValues({ ...values, [name]: e.value });
  };

  const defaultValue = t(`${translate}.${options}.${label}`);

  const styles = SelectStyle;

  return (
    <InputWrapper>
      <InputLabel for={name}>{t(`form.${name}`)}</InputLabel>

      {React.cloneElement(child, {
        onChange,
        defaultValue,
        styles,
      })}
    </InputWrapper>
  );
};

export default Select;
