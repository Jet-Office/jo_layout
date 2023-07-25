import { services } from "../../../../../data/servicesDropdown.json";
import { LINKS } from "../../../../Navigation";
import { Item } from "../../../Item";
import { Description } from "../../../../../types/servicesDropdown.type";

import { useState } from "react";

type Props = {
  windowWidth: number;
  cases: string;
  activeId: number;
  setActiveId: (id: number) => void;
  handleCLose?: () => void;
  submenuOpen: boolean;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const MobileList: React.FC<Props> = 
({ windowWidth, cases, activeId, setActiveId, handleCLose, submenuOpen, mainMenuSetIsOpen, setActiveMenuLink }) => {
  const [ descriptions, setDescriptions ] = useState<Description[]>([]);

  return (
    <div className="sidebar">
      {cases === LINKS[0].name ? (
        <>
          {services.map((item) => {
            return (
              <Item
                key={item.id}
                windowWidth={windowWidth}
                item={item}
                setActiveId={setActiveId}
                setDescriptions={setDescriptions}
                activeId={activeId}
                handleCLose={handleCLose}
                submenuOpen={submenuOpen}
                mainMenuSetIsOpen={mainMenuSetIsOpen}
                setActiveMenuLink={setActiveMenuLink}
              />
            );
          })}
        </>
      ) : null}
      
      </div>
  );
};
