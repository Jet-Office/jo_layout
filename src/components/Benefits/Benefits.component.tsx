import { motion } from "framer-motion";
import { Benefit } from "../../types/benefits.type";
import "./Benefits.component.css";

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
  const benefits: Benefit[] = [
    {
      id: 1,
      icon: "/benefits-icons/icons-4.png",
      text: "Enjoy a free 14-day trial flight. No credit card required.",
    },
    {
      id: 2,
      icon: "/benefits-icons/icons-1.png",
      text: "An account manager to coordinate tasks & ensure quality control.",
    },
    {
      id: 3,
      icon: "/benefits-icons/icons-8.png",
      text: "Task monitoring (e.g., ClickUp) and reporting.",
    },
    {
      id: 4,
      icon: "/benefits-icons/icons-2.png",
      text: "Online and offline assistance available 24/7 in any messenger service.",
    },
    {
      id: 5,
      icon: "/benefits-icons/icons-9.png",
      text: "Corporate account for remote payments.",
    },
    {
      id: 6,
      icon: "/benefits-icons/icons-6.png",
      text: "Confidentiality and security. Possibility to work on the client's software.",
    },
    {
      id: 7,
      icon: "/benefits-icons/icons-10.png",
      text: "Payment available in USDT and other cryptocurrencies.",
    },
    {
      id: 8,
      icon: "/benefits-icons/icons-3.png",
      text: "Flexible allocation of assistant time depending on needs.",
    },
    {
      id: 9,
      icon: "/benefits-icons/icons.png",
      text: "Individually selected specialists in any corner of the galaxy, fluent in any language.",
    },
    {
      id: 10,
      icon: "/benefits-icons/icons-11.png",
      text: "Resource-efficient and time-saving through outsourcing administrative tasks.",
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
          <motion.h2 custom={1} variants={animation} className="benefits__title h2">Benefits</motion.h2>
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
