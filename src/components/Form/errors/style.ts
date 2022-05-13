import styled from "styled-components/macro";
import { red } from "../../../assets/styled/base";
import { flex } from "../../../assets/styled/mixins";

export const ErrorWrapper = styled.div`
  ${flex};
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 2rem;

  span {
    font-size: 10px;
    color: ${red};
  }
`;
