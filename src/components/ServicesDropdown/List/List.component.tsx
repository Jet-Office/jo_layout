import "../ServicesDropdown.component.css";
import { DesktopList } from "./components/Desktop";
import { MobileList } from "./components/Mobile";
import "./List.component.css";

type Props = {
  cases: string;
  activeId: number;
  setActiveId: (id: number) => void;
  windowWidth: number;
  handleCLose: () => void;
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
  return (
    <> {
      windowWidth > 890 ? (
        <DesktopList
          handleCLose={handleCLose}
          windowWidth={windowWidth} 
          cases={cases} 
          activeId={activeId} 
          setActiveId={setActiveId }
          setActiveMenuLink={setActiveMenuLink}
          mainMenuSetIsOpen={mainMenuSetIsOpen}
          />)
       : (
        <MobileList
          windowWidth={windowWidth} 
          cases={cases} 
          activeId={activeId} 
          setActiveId={setActiveId }
          handleCLose={handleCLose}
          submenuOpen={submenuOpen}
          mainMenuSetIsOpen={mainMenuSetIsOpen}
          setActiveMenuLink={setActiveMenuLink}
        />)
        
    } 
    </>
  );
};
