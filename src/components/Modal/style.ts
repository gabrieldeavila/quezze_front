import styled from "styled-components/macro";
import { MarginPaddingWidthProps } from "../../assets/styled/mixins_interfaces";
import { light_grey } from "./../../assets/styled/base";
import { flex, marginPaddingWidth } from "./../../assets/styled/mixins";

export const ModalWrapper = styled.div`
  position: fixed;
  background: ${light_grey};
  padding: 2rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalTitle = styled.div<MarginPaddingWidthProps>`
  ${flex};
  ${marginPaddingWidth};
  justify-content: flex-end;
`;
