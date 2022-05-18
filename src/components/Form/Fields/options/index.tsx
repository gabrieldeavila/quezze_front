import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { OptionInterface } from "../../../../redux/interfaces/Questions";
import { FieldsProps } from "../../interfaces";
import { InputLabel, InputWrapper } from "../../style";

function OptionClone({
  name,
  child,
  values,
  setValues,
  setFieldTouched,
  action,
}: FieldsProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChange = (
    opt: OptionInterface,
    index: number,
    options: OptionInterface[]
  ) => {
    if (opt.selected) {
      options = options.map((opt) => {
        return { ...opt, selected: false };
      });
    }

    options.splice(index, 1, opt);

    setFieldTouched(name, true);

    setValues((oldVal: any) => {
      return updateValues(oldVal, options);
    });
  };

  const updateValues = (oldVal: any, options: any) => {
    let valToSave = { ...oldVal, [name]: options };
    dispatch(action(valToSave));

    return valToSave;
  };

  return (
    <InputWrapper removeBoxShadow>
      <InputLabel>{t(`form.${name}`)}</InputLabel>
      {React.cloneElement(child, { onChange })}
    </InputWrapper>
  );
}

export default OptionClone;
