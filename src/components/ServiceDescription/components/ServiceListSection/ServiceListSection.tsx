import React from "react";
import "./ServiceListSection.css"


interface ServiceItem {
  id: number,
  icon: string,
  title: string,
  description: string,
}

interface ServiceListProps {
  list: ServiceItem[];
}

export const ServiceListSection: React.FC<ServiceListProps> = ({ list }) => {
  return (
    <div className="service-list-section">
      {list.map((item) => (
        <div className="service-list-section__item" key={item.id}>
          <img className="service-list-section__icon" src={item.icon} alt={item.title} />
          <h3 className="h3 service-list-section__title">{item.title}</h3>
          <p className="service-list-section__description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};