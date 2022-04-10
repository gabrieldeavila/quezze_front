import styled from "styled-components";
import { flex } from "./mixins";
import { DivProps } from "./base_interfaces";
import type {} from "styled-components/cssprop";

export const light_grey = "#C4C8CA";
export const dark_grey = "#7F7F83";
export const light_black = "#353536";
export const dark_black = "#1E1E1F";
export const red = "#FC8490";

export const Div = styled.div<DivProps>`
  ${flex};
  gap: ${(props: DivProps) => props.gap || "1rem"};
`;
