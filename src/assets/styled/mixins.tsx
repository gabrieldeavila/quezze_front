import { css } from "styled-components/macro";
import type {} from "styled-components/cssprop";
import { FlexProps, MarginPaddingWidthProps } from "./mixins_interfaces";

export const flex = css<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
`;

export const marginPaddingWidth = css<MarginPaddingWidthProps>`
  margin-top: ${(props) => props.mt || "0"}rem;
  margin-bottom: ${(props) => props.mb || "0"}rem;
  margin-left: ${(props) => props.ml || "0"}rem;
  margin-right: ${(props) => props.mr || "0"}rem;
  padding-left: ${(props) => props.pl || "0"}rem;
  padding-right: ${(props) => props.pr || "0"}rem;
  padding-top: ${(props) => props.pt || "0"}rem;
  padding-bottom: ${(props) => props.pb || "0"}rem;
  width: ${(props) => props.width || "auto"};
  line-height: 1.5rem;
`;

export const H1config = css`
  font-size: 1.75rem;
  font-weight: 650;
  margin-top: 1rem;
`;

export const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #c4c8ca;
  }

  &::-webkit-scrollbar-thumb {
    background: #7f7f83;
  }
`;
