import React from "react";
import { SubmitProps } from "../../interfaces";

function ButtonsActions({ child }: SubmitProps) {
  return React.cloneElement(child);
}

export default ButtonsActions;
