import { services } from "../../../../../data/servicesDropdown.json";
import { LINKS } from "../../../../Navigation";
import { Item } from "../../../Item";
import { Description } from "../../../../../types/servicesDropdown.type";
import { Descriptions } from "../../../Descriptions";
import { NewsCard } from "../../../NewsCard";

import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  windowWidth: number;
  cases: string;
  activeId: number;
  setActiveId: (id: number) => void;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const DesktopList: React.FC<Props> = 
({ windowWidth, cases, activeId, setActiveId, mainMenuSetIsOpen, setActiveMenuLink }) => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);

  const handleCLose = () => {
    setActiveId(0);
    setActiveMenuLink("");
  };

  return (
    <div className="dropdown-content"> 
      <div className="sidebar"> {
        cases === LINKS[0].name ? (
          services.map((item) => {
            return (
              <Item
                key={item.id}
                windowWidth={windowWidth}
                item={item}
                setActiveId={setActiveId}
                setDescriptions={setDescriptions}
                activeId={activeId} 
                submenuOpen={false} 
                mainMenuSetIsOpen={mainMenuSetIsOpen} 
                setActiveMenuLink={setActiveMenuLink}
              ></Item>
          )})
        ) : null
      }
      </div>
      
      <div className="content-container"> {
        cases === LINKS[0].name ? (
          <div className="content scroll">
            <div className="content-description">
                <Descriptions
                  descriptions={descriptions}
                  windowWidth={windowWidth}
                ></Descriptions>
            
              <div className="services__link">
                <Link 
                  to={'/services'} 
                  className="link_all_services"
                  onClick={handleCLose}
                >
                  <span>ALL SERVICES</span>
                  <img src="/helpers-icons/chevron-down-pink.svg" className="chevron-right-pink"></img>
                </Link>
              </div>
            </div>
          </div>
        ) : null
      }
      </div>
      
      <div className="content-news"> {
        cases === LINKS[0].name ? (
            <div className="news">
              <NewsCard
                activeServiceId={activeId}
              ></NewsCard>
              <div className="services__link">
                <a className="news_link">
                  <span>GET MORE NEWS</span>
                  <img src="/helpers-icons/chevron-down-pink.svg" className="chevron-right-pink"></img>
                </a>
              </div>
            </div>
        ) : null
      }
      </div>
    </div>
  );
};
