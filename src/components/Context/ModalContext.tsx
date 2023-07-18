import { createContext, useContext, useState } from "react";

export type ModalContextType = {
  isModalOpen: boolean;
  toggleModal: () => void;
};

const initialValues = {
  isModalOpen: false,
  toggleModal: () => {},
};

export const useModal = () => {
  return useContext(ModalContext);
};

const ModalContext = createContext<ModalContextType>(initialValues);

export const ModalProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState<ModalContextType>(initialValues);

  const toggleModal = () => {
    setState((prevVal: ModalContextType) => ({
      ...prevVal,
      isModalOpen: !prevVal.isModalOpen
    }));
  };

  const contextValue: ModalContextType = {
    isModalOpen: state.isModalOpen,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
