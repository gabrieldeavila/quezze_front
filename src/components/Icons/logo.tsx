import { FunctionComponent } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ReactComponent as Quezze } from "../../assets/svg/logo.svg";
import { ReactComponent as QuezzeDesktop } from "../../assets/svg/logo_desktop.svg";
import { iconConfig } from "./../../config/index";
import { LogoDiv } from "./style";

export const Logo: FunctionComponent<LogoParams> = ({ onClick }) => {
  return (
    <LogoDiv isMobile onClick={onClick}>
      <AiOutlineMenu {...iconConfig} />
      <Quezze />
    </LogoDiv>
  );
};

export const LogoDesktop: FunctionComponent<LogoParams> = ({ onClick }) => {
  return (
    <LogoDiv onClick={onClick}>
      <QuezzeDesktop />
    </LogoDiv>
  );
};

export interface LogoParams {
  onClick?: (param: any) => void;
}
