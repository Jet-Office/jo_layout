import { Dispatch, SetStateAction, createContext, useState } from "react";

type isViewType = boolean;

type ModalPropsContext = [isViewType, Dispatch<SetStateAction<boolean>>];

export const ModalContext = createContext<ModalPropsContext>([false, () => {}]);

type Props = {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<Props> = ({children}) => {
  const [isViewModal, setIsViewModal] = useState(false);
  return (
    <ModalContext.Provider value={[isViewModal, setIsViewModal]}>
      {children}
    </ModalContext.Provider>
  )
}