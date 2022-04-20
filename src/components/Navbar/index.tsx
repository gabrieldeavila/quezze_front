import { memo, useContext, useState } from "react";
import {
  NavbarDiv,
  NavbarInput,
  NavbarInputSearch,
  NavbarInputWrapper,
  NavbarLink,
  NavbarSelect,
  NavbarSelectStyles,
  NavbarStyle,
  ProfileOption,
  ProfilePicWrapper,
  ProfileSelectStyles,
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
import Modal from "../Modal";
import { handleLanguage, languageOptions } from "./languagesOptions";
import _ from "lodash";
import { LanguageOptions } from "./interfaces";

export default memo(function Navbar() {
  const { state, setState } = useContext(GlobalContext);
  const isMobile = useMobile();
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const openSidebar = () => {
    if (!isMobile) return;

    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  };

  const handleChange = (value: LanguageOptions) => {
    // @ts-ignore
    handleLanguage(value);
  };

  return isMobile ? (
    <NavbarStyle isMobile>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NavbarLink to="/profile">{t("navbar.profile")}</NavbarLink>
        <NavbarSelect
          styles={NavbarSelectStyles}
          defaultValue={_.find(languageOptions, { value: i18n.language })}
          options={languageOptions}
          onChange={(val) => {
            // @ts-ignore
            let value = val?.value;
            handleChange(value);
          }}
        />
      </Modal>

      <Logo onClick={openSidebar} />

      <NavbarDiv>
        <AiOutlineSearch {...iconConfig} />
        <ProfilePic onClick={() => setShowModal(true)} />
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
          <NavbarSelect
            styles={ProfileSelectStyles}
            defaultValue={_.find(languageOptions, { value: i18n.language })}
            options={languageOptions}
            onChange={(val) => {
              // @ts-ignore
              let value = val?.value;
              handleChange(value);
            }}
          />
        </Popup>
      </NavbarDiv>
    </NavbarStyle>
  );
});
