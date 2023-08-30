import "../MobileMenu.css"
import "./MenuContent.css"

import { Blog } from "../../../../../types/blog.type";
import { useState } from "react";

import { ContentTable } from "../../ContentTable";

type Props = {
  windowWidth: number;
  blogPost: Blog | undefined;
  isActive: boolean;
  handleClick: () => void;
  scrollToSection: (id: string) => void;
};

export const MenuContent: React.FC<Props> = ({windowWidth, blogPost, isActive, handleClick, scrollToSection}) => {

  return (
    <div>
      <ContentTable 
        windowWidth={windowWidth} 
        blogPost={blogPost} 
        handleClick={handleClick}
        scrollToSection={scrollToSection} />
    </div>
  );
};
