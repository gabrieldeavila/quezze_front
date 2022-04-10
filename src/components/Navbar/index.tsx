import React from "react";
import { NavbarStyle } from "./style";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import ProfilePic from "../ProfilePic";
import { Div } from "./../../assets/styled/base";

export default function Navbar() {
  return (
    <NavbarStyle>
      <Div>
        <AiOutlineMenu />
        <Logo />
      </Div>
      <Div>
        <AiOutlineSearch />
        <ProfilePic />
      </Div>
    </NavbarStyle>
  );
}
