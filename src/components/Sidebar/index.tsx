import { memo, useCallback, useContext } from "react";
import {
  IconName,
  SidebarAnimDiv,
  SidebarBlank,
  SidebarDesktopIcon,
  SidebarLogo,
  SidebarRoutes,
  SidebarStyle,
  SidebarWrapper,
  SidebarWrapperDesktop,
} from "./style";
import { Logo } from "./../Icons/logo";
import { useSpring } from "react-spring";
import { GlobalContext } from "./../../Contexts/global";
import { useMobile } from "../../Hooks/useMobile";
import { ImHome3 } from "react-icons/im";
import { FaPalette } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default memo(function Sidebar() {
  const { state, setState } = useContext(GlobalContext);
  const { isSidebarOpen } = state;
  const isMobile = useMobile();
  const { t } = useTranslation();

  const styles = useSpring({
    loop: false,
    from: { translateX: isSidebarOpen ? -window.innerWidth : 0 },
    to: { translateX: isSidebarOpen ? 0 : -window.innerWidth - 20 },
  });

  const closeSidebar = useCallback(() => {
    if (!isMobile) return;

    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  }, [isMobile, state]);

  return isMobile ? (
    <SidebarAnimDiv style={styles}>
      <SidebarWrapper>
        <SidebarStyle>
          <SidebarLogo>
            <Logo onClick={closeSidebar} />
          </SidebarLogo>
          <SidebarRoutes />
        </SidebarStyle>
        <SidebarBlank onClick={closeSidebar} />
      </SidebarWrapper>
    </SidebarAnimDiv>
  ) : (
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
});
