import styled from "styled-components/macro";
import { dark_black, light_black, light_grey } from "../../assets/styled/base";
import {
  flex,
  marginPaddingWidth,
  Scrollbar,
} from "../../assets/styled/mixins";
import { FormWrapperProps, LabelProps } from "./interfaces";
import { white } from "./../../assets/styled/base";

export const FormWrapper = styled.form<FormWrapperProps>`
  ${flex};
  ${marginPaddingWidth}
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  input,
  textarea {
    width: 97%;
    background: ${light_grey};
    color: ${dark_black};
    border: none;
    padding: 1rem;
    padding-top: 1.5rem;
    border-radius: 8px;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  textarea {
    height: 5rem;
    ${Scrollbar}
  }
`;

export const InputLabel = styled.label<LabelProps>`
  font-weight: 600;
  width: fit-content;
  z-index: 2;
  position: absolute;
  padding: 0.2rem 0.5rem;
  user-select: none;
  border-radius: 0.2rem;
  color: ${white};
  background: ${light_black};
  margin-top: -15px;
  margin-left: 10px;
`;
