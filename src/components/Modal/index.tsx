import React from "react";
import { ModalTitle, ModalWrapper } from "./style";
import { IoMdClose } from "react-icons/io";
import { dark_black } from "../../assets/styled/base";

const Modal: React.FC = ({ children }) => {
  return (
    <ModalWrapper>
      <ModalTitle mb="2">
        <IoMdClose size={20} color={dark_black} />
      </ModalTitle>
      {children && children}
    </ModalWrapper>
  );
};

export default Modal;
