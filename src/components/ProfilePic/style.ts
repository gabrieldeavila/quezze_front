import styled from "styled-components/macro";
import { Div } from "../../assets/styled/base";
import { light_grey } from "./../../assets/styled/base";

export const Avatar = styled(Div)`
  width: 32px;
  height: 32px;
  background-color: ${light_grey};
  overflow: hidden;
  border-radius: 50%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
