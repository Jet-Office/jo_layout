import { Link, useParams } from "react-router-dom";

import "./MainPageBlock.component.css";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Buttons } from "../Buttons";

const animationFromLeft = {
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

const animationFromRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

type Props = {
  windowWidth: number;
};

export const MainPageBlock: React.FC<Props> = ({ windowWidth }) => {  
  const { t } = useTranslation();

  return (
    <section className="block_section">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="container">
        <div className="block">
          <motion.div variants={animationFromLeft} custom={1} className="text-block">
            <h2 className="h2">
              {t(`main.mainPageBlock.title`)}
            </h2>
            <div className="buttons">
              <Buttons />
            </div>
          </motion.div>
          {windowWidth > 1000 &&
            <motion.div variants={animationFromRight} custom={1}className="img-block">
              <img src="/crew-photos/oksana_block_img.webp" alt="oksana" />
            </motion.div>
          }
        </div>
      </motion.div>
    </section>
  );
};
