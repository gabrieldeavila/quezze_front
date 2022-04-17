import { memo, useContext } from "react";
import {
  NavbarDiv,
  NavbarInput,
  NavbarInputSearch,
  NavbarInputWrapper,
  NavbarStyle,
  ProfileOption,
  ProfilePicWrapper,
} from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import ProfilePic from "../ProfilePic";
import { iconConfig } from "./../../config/index";
import { Logo, LogoDesktop } from "../Icons/logo";
import { GlobalContext } from "../../Contexts/global";
import { useMobile } from "../../Hooks/useMobile";
import { useTranslation, Trans } from "react-i18next";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

export default memo(function Navbar() {
  const { state, setState } = useContext(GlobalContext);
  const isMobile = useMobile();
  const { t } = useTranslation();

  const openSidebar = () => {
    if (!isMobile) return;

    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  };

  return isMobile ? (
    <NavbarStyle isMobile>
      <Logo onClick={openSidebar} />
      <NavbarDiv>
        <AiOutlineSearch {...iconConfig} />
        <ProfilePic />
      </NavbarDiv>
    </NavbarStyle>
  ) : (
    <NavbarStyle>
      <Link to="/">
        <LogoDesktop />
      </Link>
      <NavbarInputWrapper>
        <NavbarInput placeholder={t("navbar.placeholder")} />
        <NavbarInputSearch>
          <AiOutlineSearch {...iconConfig} />
        </NavbarInputSearch>
      </NavbarInputWrapper>
      <NavbarDiv>
        <Popup
          trigger={() => (
            <ProfilePicWrapper>
              <ProfilePic />
            </ProfilePicWrapper>
          )}
          position="bottom right"
          closeOnDocumentClick
        >
          <ProfileOption to="/profile">{t("navbar.profile")}</ProfileOption>
        </Popup>
      </NavbarDiv>
    </NavbarStyle>
  );
});
