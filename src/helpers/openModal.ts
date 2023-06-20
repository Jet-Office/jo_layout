import { useContext } from "react";
import { ModalContext } from "../modalProvider";

const useHandleClick = () => {
  const ModalContextValue = useContext(ModalContext);
  const setIsViewModal = ModalContextValue[1];

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsViewModal(true);
    document.body.classList.add("modal-open");
  };

  return handleClick;
};

export default useHandleClick;
