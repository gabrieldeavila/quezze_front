import styled from "styled-components/macro";
import { light_black } from "./../assets/styled/base";

export const RoutesContainer = styled.div<RoutesProps>`
  margin-left: ${(props) => (props.isMobile ? 0 : "108px")};
  padding-right: 15px;
  padding-top: calc(20px + 7rem);
  padding-left: 2.5rem;
  background-color: ${light_black};
  min-height: 100vh;
  padding-bottom: 2rem;
`;

interface RoutesProps {
  isMobile?: boolean;
}
