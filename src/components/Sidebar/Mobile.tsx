import React, { useCallback, useContext, useRef } from "react";
import { Logo } from "../Icons/logo";
import { useSpring } from "react-spring";
import {
  SidebarAnimDiv,
  SidebarBlank,
  SidebarLogo,
  SidebarRoutes,
  SidebarStyle,
  SidebarWrapper,
} from "./style";
import { GlobalContext } from "../../Contexts/global";
import { useMobile } from "../../Hooks/useMobile";

const Mobile = () => {
  const { state, setState } = useContext(GlobalContext);
  const { isSidebarOpen } = state;

  const avoidFirstRender = useRef(false);

  const translateXFrom = isSidebarOpen ? -window.innerWidth : 0;
  const translateXTo = isSidebarOpen ? 0 : -window.innerWidth - 20;
  const opacityFrom = isSidebarOpen ? 0 : 1;
  const opacityTo = isSidebarOpen ? 1 : 0;

  const styles = useSpring({
    loop: false,
    immediate: !avoidFirstRender.current,
    from: {
      translateX: translateXFrom,
      opacity: opacityFrom,
    },
    to: {
      translateX: translateXTo,
      opacity: opacityTo,
    },
  });

  const closeSidebar = useCallback(() => {
    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  }, [state]);

  return (
    <SidebarAnimDiv ref={avoidFirstRender} style={styles}>
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
  );
};

export default Mobile;
