import "../../Blog.component.css"
import "./MobileMenu.css"

import { Blog } from "../../../../types/blog.type";
import { useEffect, useState } from "react";
import { MenuContent } from "./components";

type Props = {
  windowWidth: number;
  blogPost: Blog | undefined;
  scrollToSection: (id: string) => void;
};

export const MobileMenu: React.FC<Props> = ({windowWidth, blogPost, scrollToSection}) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((activeMenu) => !activeMenu)
  }
  
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [isActive, setActive])

  return (
    <div className={`menuContainer ${isActive ? 'menuContainer-active' : ''}`}>
      <div className="buttonMenuContainer">
        <img 
          className="arrow-img" src="/helpers-icons/arrow-right-white-thin.svg" alt=""
          onClick={handleClick}
          />
      </div>
      <MenuContent 
        windowWidth={windowWidth} 
        blogPost={blogPost} 
        isActive={isActive} 
        handleClick={handleClick}
        scrollToSection={scrollToSection} />
    </div>
  );
};
