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

  const onChange = (opt: OptionInterface, index: number) => {
    let options: OptionInterface[] = [...values[name as keyof typeof values]];

    if (opt.selected) {
      options = options.map((opt) => {
        return { ...opt, selected: false };
      });
    }

    options.splice(index, 1, opt);

    dispatch(action({ ...values, [name]: options }));
    setValues({ ...values, [name]: options });
    setFieldTouched(name, true);
  };

  return (
    <InputWrapper removeBoxShadow>
      <InputLabel>{t(`form.${name}`)}</InputLabel>
      {React.cloneElement(child, { onChange })}
    </InputWrapper>
  );
}

export default OptionClone;
