import { motion } from "framer-motion";
import "./ControlPreview.component.css";

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

export const ControlPreview = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="control__section">
      <div className="control__background">
      </div>
      <div className="control">
        <div className="control__title_container">
          <motion.h2 variants={animation} custom={1} className="control__title">
            Mission control for your business, you can trust
          </motion.h2>
          <motion.p variants={animation} custom={2} className="control_description">We offer virtual assistants and concierge services trusted by companies and businessmen 
            to manage tasks, calendars, shopping, events, bills, documents, SMM, and more. In our work, 
            we use process automation and AI to achieve success and solve problems at maximum speed!
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
