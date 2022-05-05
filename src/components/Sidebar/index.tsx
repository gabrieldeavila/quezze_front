import { memo } from "react";
import { useMobile } from "../../Hooks/useMobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default memo(function Sidebar() {
  const isMobile = useMobile();

  return isMobile ? <Mobile /> : <Desktop />;
});
