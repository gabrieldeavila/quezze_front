import { css } from "styled-components/macro";
import type {} from "styled-components/cssprop";
import { flexProps } from "./mixins_interfaces";

export const flex = css`
  display: flex;
  flex-direction: ${(props: flexProps) => props.direction || "row"};
  justify-content: ${(props: flexProps) => props.justify || "center"};
  align-items: ${(props: flexProps) => props.align || "center"};
`;
