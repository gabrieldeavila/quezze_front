import styled from "styled-components";
import { flex } from "./../../assets/styled/mixins";

export const PlayImg = styled.img`
  border-radius: 5px;
  width: 50rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const PlayWrapper = styled.div`
  ${flex}
  flex-direction: column;
  gap: 2rem;
`;
