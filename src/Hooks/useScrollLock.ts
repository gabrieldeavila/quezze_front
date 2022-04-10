import React from "react";

export const useScrollLock = () => {
  const lockScroll = React.useCallback(() => {
    // seleciona o tamanho da tela e quando está sendo ocupado
    let clientWidth = document.querySelector("#root")!.clientWidth;
    let scrollBarWidth = window.innerWidth - clientWidth;

    // remove scroll
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }, []);

  const unlockScroll = React.useCallback(() => {
    // adiciona scroll
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
