import React from "react";
import { SubmitProps } from "./../../interfaces";
import _ from "lodash";

const Button = ({ child, isSubmitting }: SubmitProps) => {
  return React.cloneElement(child, {
    disabled: isSubmitting,
  });
};

export default Button;
