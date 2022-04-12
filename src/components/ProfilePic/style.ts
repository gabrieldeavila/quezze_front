import styled from "styled-components/macro";
import { Div } from "../../assets/styled/base";
import { light_grey } from "../../assets/styled/base";

export const Avatar = styled(Div)<AvatarProps>`
  width: ${(props) => (props.mobile ? "32" : "50")}px;
  height: ${(props) => (props.mobile ? "32" : "50")}px;
  background-color: ${light_grey};
  overflow: hidden;
  border-radius: 50%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

interface AvatarProps {
  mobile?: boolean;
}
