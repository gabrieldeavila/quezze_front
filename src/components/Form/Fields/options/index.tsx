import React from "react";
import { FieldsProps } from "../../interfaces";

function OptionClone({ child }: FieldsProps) {
  return React.cloneElement(child);
}

export default OptionClone;
