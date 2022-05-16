import styled from "styled-components/macro";
import { light_grey, white } from "../../assets/styled/base";
import { flex } from "./../../assets/styled/mixins";
import { blue } from "./../../assets/styled/base";

export const OptionsWrapper = styled.div`
  ${flex};
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

export const OptionSquare = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 2.5vh;
  height: 2.5vh;
  background: ${light_grey};
  border-radius: 0.1rem;
  ${flex};

  svg {
    fill: ${blue};
    font-size: 20px;
  }
`;

export const OptionInputWrapper = styled.div``;

export const OptionWrapper = styled.div`
  ${flex};
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;

  ${OptionInputWrapper} {
    flex-grow: 1;
  }

  input {
    background: transparent;
    color: ${white};
    padding: 0;
  }
`;
