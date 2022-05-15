import React from "react";
import { OptionsProps } from "./interface";
import { OptionsWrapper } from "./style";

function Options(props: OptionsProps) {
  const array = new Array(5).fill(false);

  return (
    <OptionsWrapper>
      {array.map((_, index) => {
        return <div key={index}>Option</div>;
      })}
    </OptionsWrapper>
  );
}

export default Options;
