import React from 'react';

import './CrewMember.component.css';

type CrewMemberProps = {
  name: string;
  role: string;
  avatar: string;
};

export const CrewMember: React.FC<CrewMemberProps> = ({ name, role, avatar }) => (
  <div className="crew__item">
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
</div>
);
