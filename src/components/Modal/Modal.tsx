import React from "react";
import "./Modal.css";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ active, setActive }) => {
  const handleCloseClick = () => {
    setActive(false);
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={handleCloseClick}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={handleContentClick}>
        <h2 className="modal__title">Attention</h2>
        <p className="modal__text">
          "Experience our service with a 14-day free trial! Get a bonus of $30,
          equivalent to 3 hours of work. Select your preferred messenger to
          connect with our manager. Start your journey with us today!"
        </p>
        <div className="link__container">
          <a className="modal__link" href="https://t.me/Oksana_HeadJetOffice">
            <img src="../../../public/services-icons/telegram-icon.svg" alt="" />
          </a>
        </div>
        <button className="modal__close" onClick={handleCloseClick}></button>
      </div>
    </div>
  );
};
