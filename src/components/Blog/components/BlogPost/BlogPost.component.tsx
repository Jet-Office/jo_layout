import { useCallback, useState } from "react";
import { Blog } from "../../../../types/blog.type";
import { Content } from "../Content";

import "../../Blog.component.css"
import { Link, Route, Routes } from "react-router-dom";

type Props = {
  blog: Blog
};

export const BlogPost: React.FC<Props> = ( { blog } ) => {

  return (
    <div 
      className="blog--item bg--gradient" 
      style={{
        background: blog.background !== "none" ? `url(/blog-images/backgrounds/${blog.background}.png) center/cover no-repeat` : "none"
      }}>

      <div className="head_info">
        <span id="serviceItem">{blog.serviceItem}</span>
        <h3 id="title">{blog.title}</h3>
      </div>
      
      <div className="bottom_info">
        <span id="category">{blog.category}</span>
        <Link to={`/resources/blog/${blog.title}`}>
          <img id="arrow" src="/helpers-icons/arrow-right.svg"></img>
        </Link>
      </div>

      
    </div>
    
  );
};
