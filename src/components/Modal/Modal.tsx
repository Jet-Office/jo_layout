import React from "react";
import "./Modal.css";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal: React.FC<Props> = ({ active, setActive }) => {
  const handleCloseClick = () => {
    setActive(false);
    document.body.classList.remove("modal-open");
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={active ? "modal modal_active" : "modal"} onClick={handleCloseClick}>
      <div className={active ? "modal__content modal_active" : "modal__content"} onClick={handleContentClick}>
        {/* <h2 className="modal__title">Attention</h2> */}
        <p className="modal__text">
          Experience our service with a 14-day free trial! Get a bonus of $30,
          equivalent to 3 hours of work. Select your preferred messenger to
          connect with our manager. Start your journey with us today!
        </p>
        <div className="link__container">
          <a className="modal__link" href="https://t.me/Oksana_HeadJetOffice">
            <button className="button button--pink modal--button">
              <span>connect with us</span>
              <img className="modal__img" src="/services-icons/bxl_telegram.svg" alt="telegram__icon" />
            </button>
          </a>
        </div>
        <button className="modal__close" onClick={handleCloseClick}></button>
      </div>
    </div>
  );
};
