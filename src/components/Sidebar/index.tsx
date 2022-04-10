import { memo, useContext } from "react";
import {
  SidebarAnimDiv,
  SidebarBlank,
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

export default memo(function Sidebar() {
  const { state, setState } = useContext(GlobalContext);
  const { isSidebarOpen } = state;
  const isMobile = useMobile();

  const styles = useSpring({
    loop: false,
    from: { translateX: isSidebarOpen ? -window.innerWidth : 0 },
    to: { translateX: isSidebarOpen ? 0 : -window.innerWidth - 20 },
  });

  const closeSidebar = () => {
    if (!isMobile) return;

    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  };

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
    <SidebarWrapperDesktop></SidebarWrapperDesktop>
  );
});
