import React from "react";


import "./ServiceList2Section.css";

interface ServiceList2Item {
  id: number;
  number: string;
  title: string;
  description: string;
}

interface Props {
  list: ServiceList2Item[];
}

export const ServiceList2Section: React.FC<Props> = ({ list }) => {
  return (
    <div className="service-list2-section">
      {list.map((item) => (
        <div key={item.id} className="service-list2-item">
          <div className="service-list2-item-number">{item.number}</div>
          <div className="service-list2-item-title">{item.title}</div>
          <div className="service-list2-item-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

