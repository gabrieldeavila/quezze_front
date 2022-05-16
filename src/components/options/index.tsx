import React, { memo, useCallback, useState } from "react";
import { OptionsProps, OptionProps } from "./interface";
import {
  OptionInputWrapper,
  OptionSquare,
  OptionsWrapper,
  OptionWrapper,
} from "./style";
import { BsCheck } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Options(props: OptionsProps) {
  return (
    <OptionsWrapper>
      {props.data.options.map((opt, index) => (
        <Option
          onChange={props.onChange}
          index={index}
          option={opt}
          key={index}
        />
      ))}
    </OptionsWrapper>
  );
}

const Option = memo(
  ({ option, onChange = (x, y) => {}, index }: OptionProps) => {
    const { t } = useTranslation();

    // prettier-ignore
    const handleClick = useCallback((e) => {
      let updateValue = { ...option, selected: !option.selected };
      onChange(updateValue, index);
    }, [option]);

    // prettier-ignore
    const handleChange = useCallback((e) => {
      let val = e.target.value;
      let updateValue = { ...option, label: val } ;
      
      onChange(updateValue, index);
  }, [option, onChange, index]);

    return (
      <OptionWrapper>
        <OptionSquare onClick={handleClick}>
          {option.selected && <BsCheck />}
        </OptionSquare>
        <OptionInputWrapper>
          <input
            type="text"
            value={option.label}
            onChange={handleChange}
            placeholder={t("options.placeholder")}
          />
        </OptionInputWrapper>
      </OptionWrapper>
    );
  }
);

export default Options;
