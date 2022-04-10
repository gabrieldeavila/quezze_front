import { createContext, useEffect, useState } from "react";
import { useScrollLock } from "./../Hooks/useScrollLock";
import _ from "lodash";

type GlobalType = {
  isSidebarOpen: boolean;
};

type PropsGlobalContext = {
  state: GlobalType;
  setState: React.Dispatch<React.SetStateAction<GlobalType>>;
};

const DEFAULT_VALUE = {
  state: {
    isSidebarOpen: false,
  },
  setState: () => {},
};

export const GlobalContext = createContext<PropsGlobalContext>(DEFAULT_VALUE);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    // primeira vez que o componente é renderizado
    if (_.isNull(state.isSidebarOpen)) return;

    // usuário abriu o sidebar, bloqueia o scroll
    if (state.isSidebarOpen) {
      lockScroll();
      return;
    }

    // usuário fechou o sidebar, desbloqueia o scroll
    unlockScroll();
  }, [state.isSidebarOpen]);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
