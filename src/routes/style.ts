import styled from "styled-components/macro";

export const RoutesContainer = styled.div<RoutesProps>`
  margin-left: ${(props) => (props.isMobile ? 0 : "108px")};
  padding-top: calc(20px + 5rem);
  padding-left: 1rem;
  padding-bottom: 2rem;
`;

interface RoutesProps {
  isMobile?: boolean;
}
