import React from "react";
import "./Modal.css";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ active, setActive, children }) => {
  const handleClick = () => {
    setActive(false);
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={handleClick}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};
