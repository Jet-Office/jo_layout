import { motion } from "framer-motion";
import "./GettingStartedBlock.component.css";

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

const animationFromBottom = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}


export const GettingStartedBlock: React.FC = () => {  

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="container">
      <div className="getting_started_block">
        <motion.div variants={animationFromLeft} custom={1} className="getting_started_text-block">
          <h3>Getting started is easy</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </motion.div>
        <motion.div variants={animationFromBottom} custom={1} className="video-block">
          <img src="/videos/ex.png" alt="" />
        </motion.div>
        </div>
    </motion.div>
  );
};
