import React, { useState } from "react";
import "./ServicesDropdown.component.css";
import { Item } from "./Item/Item.component";
import { services } from "../../data/servicesDropdown.json";
import { List } from "./List";
import { Description } from "../../types/servicesDropdown.type";
import { Descriptions } from "./Descriptions/Descriptions.component";

type Props = {
  windowWidth: number;
  casesPageRef: React.RefObject<HTMLElement>;
};

export const ServicesDropdown: React.FC<Props> = ({
  windowWidth,
  casesPageRef,
}) => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="dropdown-content">
      <div className="sidebar">
        <List
          windowWidth={windowWidth}
          cases={services}
          setActiveId={setActiveId}
          setDescriptions={setDescriptions}
          activeId={activeId}
        />
      </div>

      <div className="content">
        <Descriptions descriptions={descriptions} />
        <div className="services__link">
          <button>ALL SERVICES</button>
        </div>
      </div>
      {/* Need to remake it for react components */}
      <div className="news">
        <div className="news-container">
          <div className="news-card">
            <img src="../src/assets/news1.png" alt="123" />

            <div className="text-overlay">
              JetOffice email Management Services for business
            </div>
          </div>
          <div className="news-card">
            <img src="../src/assets/news2.png" alt="123" />

            <div className="text-overlay">
              JetOffice email Management Services for business
            </div>
          </div>
          <div className="news-card">
            <img src="../src/assets/news3.png" alt="123" />

            <div className="text-overlay">
              JetOffice email Management Services for business
            </div>
          </div>
        </div>

        <div className="services__link">
          <button>GET MORE NEWS</button>
        </div>
      </div>
    </div>
  );
};
