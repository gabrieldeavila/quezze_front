import { css } from "styled-components/macro";
import type {} from "styled-components/cssprop";
import { FlexProps, MarginPaddingWidthProps } from "./mixins_interfaces";
import { dark_grey, light_grey } from "./base";

export const flex = css`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction || "row"};
  justify-content: ${(props: FlexProps) => props.justify || "center"};
  align-items: ${(props: FlexProps) => props.align || "center"};
`;

export const marginPaddingWidth = css`
  margin-top: ${(props: MarginPaddingWidthProps) => props.mt || "0"}rem;
  margin-bottom: ${(props: MarginPaddingWidthProps) => props.mb || "0"}rem;
  margin-left: ${(props: MarginPaddingWidthProps) => props.ml || "0"}rem;
  margin-right: ${(props: MarginPaddingWidthProps) => props.mr || "0"}rem;
  padding-left: ${(props: MarginPaddingWidthProps) => props.pl || "0"}rem;
  padding-right: ${(props: MarginPaddingWidthProps) => props.pr || "0"}rem;
  padding-top: ${(props: MarginPaddingWidthProps) => props.pt || "0"}rem;
  padding-bottom: ${(props: MarginPaddingWidthProps) => props.pb || "0"}rem;
  width: ${(props: MarginPaddingWidthProps) => props.width || "auto"};
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
