import { Link, useParams } from "react-router-dom";

import "./MainPageBlock.component.css";
import { motion } from "framer-motion";

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

export const MainPageBlock: React.FC = () => {  

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="container">
      <div className="block">
        <motion.div variants={animationFromLeft} custom={1} className="text-block">
          <h2>Virtual Assistance & Business Solutions:<br/>Human Driven, AI Empowered.</h2>
          <div className="buttons">
            <button className="button button--dark">Get in touch</button>
            <button className="button button--pink">Start free trial</button>
          </div>
        </motion.div>
        <motion.div variants={animationFromRight} custom={1}className="img-block">
          <img src="/crew-photos/oksana_block_img.webp" alt="oksana" />
        </motion.div>
      </div>
    </motion.div>
  );
};
