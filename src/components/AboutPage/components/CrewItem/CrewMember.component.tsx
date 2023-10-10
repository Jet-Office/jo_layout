import React from 'react';

import './CrewMember.component.css';
import { motion } from 'framer-motion';

type CrewMemberProps = {
  name: string;
  role: string;
  avatar: string;
  id: number;
};

const animationLeft = {
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

export const CrewMember: React.FC<CrewMemberProps> = ({ name, role, avatar, id }) => (
  <motion.div variants={animationLeft} custom={id * 0.3 + 1} className="crew__item">
    <div className="crew__img_container">
      <img
        src={avatar}
        className="crew__img"
        alt={name}
      />
    </div>
    <div className="crew__description">
      <p className="crew__name">{name}</p>
      <p className="crew__role">{role}</p>
    </div>
  </motion.div>
);
