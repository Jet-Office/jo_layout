import { motion } from "framer-motion";
import { Benefit } from "../../types/benefits.type";
import "./Benefits.component.css";
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

const animationShuttle = {
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

export const Benefits = () => {
  const { t } = useTranslation();

  const benefits: Benefit[] = [
    {
      id: 1,
      icon: "/benefits-icons/icons-4.png",
      text: t(`main.benefits.text1`),
    },
    {
      id: 2,
      icon: "/benefits-icons/icons-1.png",
      text: t(`main.benefits.text2`),
    },
    {
      id: 3,
      icon: "/benefits-icons/icons-8.png",
      text: t(`main.benefits.text3`),
    },
    {
      id: 4,
      icon: "/benefits-icons/icons-2.png",
      text: t(`main.benefits.text4`),
    },
    {
      id: 5,
      icon: "/benefits-icons/icons-9.png",
      text: t(`main.benefits.text5`),
    },
    {
      id: 6,
      icon: "/benefits-icons/icons-6.png",
      text: t(`main.benefits.text6`),
    },
    {
      id: 7,
      icon: "/benefits-icons/icons-10.png",
      text: t(`main.benefits.text7`),
    },
    {
      id: 8,
      icon: "/benefits-icons/icons-3.png",
      text: t(`main.benefits.text8`),
    },
    {
      id: 9,
      icon: "/benefits-icons/icons.png",
      text: t(`main.benefits.text9`),
    },
    {
      id: 10,
      icon: "/benefits-icons/icons-11.png",
      text: t(`main.benefits.text10`),
    },
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="benefits">
      <div className="benefits__container container">
        <div className="benefits__text_container">
          <motion.h2 custom={1} variants={animation} className="benefits__title h2">
            {t(`main.benefits.title`)}
          </motion.h2>
          <div className="benefits__list">
            {benefits.map(({ id, icon, text }) => (
              <motion.div custom={id + 0.1} variants={animation} key={id} className="benefits__item">
                <img src={icon} alt="" className="benefits__icon" />
                <p className="benefits__text">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="benefits__plane_container">
            <motion.img custom={2} variants={animationShuttle} src="/benefits-icons/plane.svg" width={259.39} height={616} alt="rocket" className="benefits__plane" />
        </div>
      </div>
    </motion.section>
  );
};
