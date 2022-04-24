import styled, { css } from "styled-components/macro";
import { flex, H1config, marginPaddingWidth } from "./mixins";
import { DivProps } from "./base_interfaces";
import { animated } from "react-spring";

export const white = "#FFFFFF";
export const light_grey = "#C4C8CA";
export const dark_grey = "#7F7F83";
export const light_black = "#353536";
export const dark_black = "#1E1E1F";
export const red = "#FC8490";

export const AnimDiv = styled(animated.div)<any>`
  z-index: 1000;
`;

export const Div = styled.div<DivProps>`
  ${flex};
  width: 100%;
  gap: ${(props: DivProps) => props.gap || "1rem"};
`;

export const H1Light = styled.h1`
  ${H1config}
  color: ${light_grey};
`;

export const H1Dark = styled.h1`
  ${H1config}
  color: ${dark_grey};
`;

export const PLight = styled.p`
  color: ${light_grey};
  ${marginPaddingWidth};
`;

export const PDark = styled.p`
  color: ${dark_grey};
  ${marginPaddingWidth};
`;
