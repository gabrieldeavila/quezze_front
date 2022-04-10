import styled from "styled-components";
import { dark_black } from "../../assets/styled/base";
import { flex } from "../../assets/styled/mixins";

export const NavbarStyle = styled.nav`
  ${flex};
  justify-content: space-between;
  padding: 1rem;
  background-color: ${dark_black};
`;
