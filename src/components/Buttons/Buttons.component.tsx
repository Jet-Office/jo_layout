import { Button } from "../Button";
import "./Buttons.component.css";
import useHandleClick from "../../helpers/openModal";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const animation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const Buttons = () => {
  const handleClick = useHandleClick();
  const { t } = useTranslation();

  return (
    <motion.div 
      custom={3}
      variants={animation}
      className="buttons">
      <Button color="dark" text={t(`main.getInTouchButton`)} onClick={handleClick} />
      <Button color="pink" text={t(`main.startFreehButton`)} onClick={handleClick} />
    </motion.div>
  );
};
