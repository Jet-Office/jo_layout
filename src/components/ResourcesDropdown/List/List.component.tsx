import "../ResourcesDropdown.component.css";
import "./List.component.css";
import { resources } from "../../../data/resourcesDropdown.json";
import { useState } from "react";
import { Link } from 'react-router-dom';

type Props = {
  cases: string;
  activeId: number;
  setActiveId: (id: number) => void;
  windowWidth: number;
  handleCLose?: () => void;
  submenuOpen: boolean;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const List: React.FC<Props> = ({
  cases,
  setActiveId,
  //setDescriptions,
  activeId,
  windowWidth,
  handleCLose,
  submenuOpen,
  mainMenuSetIsOpen,
  setActiveMenuLink
}) => {
  const [currentService, setCurrentService] = useState("");
  
  const handleClick = (service: string) => {
    setCurrentService(service);
  };

  return (
    <div className="dropdown-content service-content">
      <ul>
        {resources.map((resource) => {
          return <li 
          className="resource--item"
          onClick={() => handleClick(resource.name)}
          >
            <Link to="/resources/blog">{resource.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
};
