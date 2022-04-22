import styled from "styled-components/macro";
import { Div } from "../../assets/styled/base";

export const LogoDiv = styled(Div)`
  svg {
    width: ${(props: LogoDivParams) => (!props.isMobile ? "100px" : "auto")};
  }
  width: auto;
  justify-content: flex-start;
`;

interface LogoDivParams {
  isMobile?: boolean;
}
