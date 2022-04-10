import styled from "styled-components/macro";
import { AnimDiv, dark_black, Div } from "../../assets/styled/base";

// mobile
export const SidebarAnimDiv = styled(AnimDiv)`
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const SidebarWrapper = styled(Div)`
  height: 100%;
  gap: 0;
`;

export const SidebarStyle = styled(Div)`
  flex-direction: column;
  width: 85%;
  height: 100%;
  background: ${dark_black};
`;

export const SidebarLogo = styled(Div)`
  width: 80%;
  height: calc(20px + 4rem);
  justify-content: flex-start;
`;

export const SidebarRoutes = styled(Div)`
  width: 80%;
  height: -webkit-fill-available;
`;

export const SidebarBlank = styled(SidebarStyle)`
  width: 20%;
  background-color: #ffffff8c;
`;

// desktop
export const SidebarWrapperDesktop = styled(Div)`
  height: 100%;
  width: 108px;
  margin-top: calc(20px + 4rem);
  background: ${dark_black};
  position: fixed;
`;
