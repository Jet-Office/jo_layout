import { useCallback, useState } from "react";
import { Blog } from "../../../../types/blog.type";

import "../../Blog.component.css"

type Props = {
  blog: Blog
};

export const BlogPost: React.FC<Props> = ( { blog: { id, title, background, category, serviceItem } } ) => {

  return (
    <div 
      className="blog--item bg--gradient" 
      style={{
        background: background !== "none" ? `url(/blog-images/backgrounds/${background}.png) center/cover no-repeat` : "none"
      }}>
    
      <div className="head_info">
        <span id="serviceItem">{serviceItem}</span>
        <h3 id="title">{title}</h3>
      </div>
      
      <div className="bottom_info">
        <span id="category">{category}</span>
        <img id="arrow" src="/helpers-icons/arrow-right.svg"></img>
      </div>
    </div>
  );
};
