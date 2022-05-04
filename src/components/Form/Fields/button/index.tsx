import React from "react";
import { SubmitProps } from "./../../interfaces";
import _ from "lodash";

const Button = ({ child, errors, isSubmitting }: SubmitProps) => {
  return React.cloneElement(child, {
    disabled: isSubmitting || !_.isEmpty(errors),
  });
};

export default Button;
