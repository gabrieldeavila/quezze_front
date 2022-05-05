import React from "react";
import { IconName, SidebarDesktopIcon, SidebarWrapperDesktop } from "./style";
import { ImHome3 } from "react-icons/im";
import { FaPalette } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Desktop() {
  const { t } = useTranslation();

  return (
    <SidebarWrapperDesktop>
      <SidebarDesktopIcon to="/">
        <ImHome3 />
        <IconName>{t("sidebar.home")}</IconName>
      </SidebarDesktopIcon>
      <SidebarDesktopIcon to="/create">
        <FaPalette />
        <IconName>{t("sidebar.create")}</IconName>
      </SidebarDesktopIcon>
    </SidebarWrapperDesktop>
  );
}

export default Desktop;
