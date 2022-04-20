import React from "react";
import { ModalTitle, ModalWrapper } from "./style";
import { IoMdClose } from "react-icons/io";
import { dark_black } from "../../assets/styled/base";

const Modal: React.FC<ModalProps> = ({ children, setShowModal, showModal }) => {
  if (!showModal) return null;

  return (
    <ModalWrapper>
      <ModalTitle mb="2">
        <IoMdClose
          size={20}
          color={dark_black}
          onClick={() => setShowModal(false)}
        />
      </ModalTitle>
      {children && children}
    </ModalWrapper>
  );
};

export default Modal;

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
