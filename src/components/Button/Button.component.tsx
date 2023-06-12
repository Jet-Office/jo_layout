import { useState } from "react";
import "./Button.component.css";
import { Modal } from "../Modal/Modal";

type Props = {
  color: string;
  text: string;
};

export const Button: React.FC<Props> = ({ color, text }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setModalActive(true);
  };

  return (
    <>
      <button className={`button button--${color}`} onClick={handleClick}>
        {text}
      </button>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          {/* Modal content */}
        </Modal>
      )}
    </>
  );
};


{/* <a
href="https://t.me/Oksana_HeadJetOffice"
target="_blank"
rel="noreferrer"
className={`button button--${color}`}
>
{text}
</a> */}