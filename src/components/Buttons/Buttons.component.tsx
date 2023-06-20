import { ModalContext } from "../../modalProvider";
import { useContext } from "react";
import { Button } from "../Button";
import "./Buttons.component.css";

export const Buttons = () => {
  const setIsViewModal = useContext(ModalContext)[1];

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsViewModal(true);
    document.body.classList.add("modal-open");
  };
  return (
    <div className="buttons">
      <Button color="dark" text="Get in touch" onClick={handleClick} />
      <Button color="pink" text="Start free trial" onClick={handleClick} />
    </div>
  );
};
