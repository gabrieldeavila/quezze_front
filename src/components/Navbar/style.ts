import styled from "styled-components/macro";
import { dark_black, Div } from "../../assets/styled/base";
import { flex } from "../../assets/styled/mixins";
import { light_grey } from "./../../assets/styled/base";

export const NavbarStyle = styled.nav`
  ${flex};
  justify-content: space-between;
  padding: 2rem;
  background-color: ${dark_black};
  width: -webkit-fill-available;
  position: fixed;
  height: 20px;
`;

export const NavbarDiv = styled(Div)`
  width: auto;
`;

export const NavbarInputWrapper = styled(Div)`
  width: auto;
  gap: 0;
`;

export const NavbarInput = styled.input`
  height: 36px;
  background: none;
  border: 2px solid ${light_grey};
  border-radius: 3px 0px 0px 3px;
  padding-left: 10px;
`;

export const NavbarInputSearch = styled(Div)`
  height: 36px;
  border: 2px solid ${light_grey};
  border-radius: 3px 0px 0px 3px;
`;
