import React from 'react';

import './CrewMember.component.css';

type CrewMemberProps = {
  name: string;
  role: string;
  avatar: string;
};

export const CrewMember: React.FC<CrewMemberProps> = ({ name, role, avatar }) => (
  <div className="crew-member">
    <img src={avatar} alt={name} className="crew-member__avatar" />
    <h3 className="crew-member__name">{name}</h3>
    <p className="crew-member__role">{role}</p>
  </div>
);
