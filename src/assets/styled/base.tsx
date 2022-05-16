import styled, { css } from "styled-components/macro";
import { flex, H1config, marginPaddingWidth } from "./mixins";
import { DivProps, ButtonGroupProps } from "./base_interfaces";
import { animated } from "react-spring";

export const white = "#FFFFFF";
export const light_grey = "#C4C8CA";
export const dark_grey = "#7F7F83";
export const light_black = "#353536";
export const dark_black = "#1E1E1F";
export const red = "#FC8490";
export const blue = "#001F8E";

export const AnimDiv = styled(animated.div)<any>`
  z-index: 1000;
`;

export const Div = styled.div<DivProps>`
  ${flex};
  flex-wrap: nowrap;
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

export const Button = styled.button`
  color: ${dark_black};
  font-weight: bold;
  background-color: ${light_grey};
  border: none;
  border-radius: 5px;
  padding: 1rem 4rem;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.25s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonGroup = styled.div<ButtonGroupProps>`
  ${flex};
  gap: 1rem;

  ${Button} {
    flex-grow: 1;
  }
`;
