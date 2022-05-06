import styled from "styled-components/macro";
import { flex } from "../../assets/styled/mixins";
import { dark_grey, light_grey } from "./../../assets/styled/base";

export const DropzoneWrapper = styled.div`
  background-color: ${light_grey};
  padding: 2rem;
  cursor: pointer;
  border-radius: 5px;
`;

export const DropzoneContainer = styled.div`
  ${flex};
  gap: 2rem;

  svg {
    fill: ${dark_grey};
    font-size: 40px;
  }

  p {
    color: ${dark_grey};
    font-weight: bold;
    user-select: none;
  }
`;
