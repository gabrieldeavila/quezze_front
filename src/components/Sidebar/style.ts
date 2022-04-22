import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { flex } from "./../../assets/styled/mixins";
import {
  AnimDiv,
  dark_black,
  dark_grey,
  Div,
  light_black,
  light_grey,
  red,
} from "../../assets/styled/base";

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
  width: 90%;
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
  padding-top: 3rem;
  width: 108px;
  margin-top: calc(68px + 0.5rem);
  background: ${dark_black};
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  gap: 2rem;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${light_grey};
  }

  &::-webkit-scrollbar-thumb {
    background: ${dark_grey};
  }
`;

export const SidebarDesktopIcon = styled(NavLink)`
  ${flex}
  flex-direction: column;
  text-decoration: none;
  color: ${dark_grey};
  gap: 0.25rem;
  font-weight: 500;

  > :first-child {
    font-size: 30px;
  }

  &.active {
    color: ${light_grey};
  }

  &:last-child {
    margin-bottom: 10rem;
  }

  &:hover {
    color: #fff;
  }
`;

export const IconName = styled(Div)`
  font-size: 12px;
`;
