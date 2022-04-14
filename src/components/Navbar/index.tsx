import { memo, useContext } from "react";
import {
  NavbarDiv,
  NavbarInput,
  NavbarInputSearch,
  NavbarInputWrapper,
  NavbarStyle,
} from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import ProfilePic from "../ProfilePic";
import { iconConfig } from "./../../config/index";
import { Logo, LogoDesktop } from "../Icons/logo";
import { GlobalContext } from "../../Contexts/global";
import { useMobile } from "../../Hooks/useMobile";
import { useTranslation, Trans } from "react-i18next";

export default memo(function Navbar() {
  const { state, setState } = useContext(GlobalContext);
  const isMobile = useMobile();
  const { t } = useTranslation();

  const openSidebar = () => {
    if (!isMobile) return;

    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  };

  return isMobile ? (
    <NavbarStyle>
      <Logo onClick={openSidebar} />
      <NavbarDiv>
        <AiOutlineSearch {...iconConfig} />
        <ProfilePic />
      </NavbarDiv>
    </NavbarStyle>
  ) : (
    <NavbarStyle>
      <LogoDesktop />
      <NavbarInputWrapper>
        <NavbarInput placeholder={t("description.part2")} />
        <NavbarInputSearch>
          <AiOutlineSearch {...iconConfig} />
        </NavbarInputSearch>
      </NavbarInputWrapper>
      <NavbarDiv>
        <ProfilePic />
      </NavbarDiv>
    </NavbarStyle>
  );
});
