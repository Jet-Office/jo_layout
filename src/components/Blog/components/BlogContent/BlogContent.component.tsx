import { useCallback, useRef, useEffect, useState } from "react";
import { firstBlog } from "../../../../data/blog.json";
import { secondBlog } from "../../../../data/blog.json";

import { ListBlogPosts } from "../ListBlogPosts";
import { BlogCategory } from "../BlogCategory";
import { BlogPost } from "../BlogPost";

import "../../Blog.component.css"

type Props = {
  currentCategory: string[];
  setCurrentCategory: (currentCategory: string[]) => void;
};

export const DEFAULT_BLOG_CATEGORY = "All";

export const BlogContent: React.FC<Props> = ({currentCategory, setCurrentCategory}) => {
 
  return (
    <>
      <section id="blog--content">
        <ListBlogPosts currentCategory={currentCategory} blogObject={firstBlog}  />

        <div id="description--container">
          <p className="description--text">
            We offer virtual assistants and concierge services trusted by companiesand businessmen 
            to manage tasks, calendars, shopping, events, bills, documents, SMM, and more.In our work, 
            we use process automation and AI to achieve success and solve problems at maximum speed!</p>
          <button className="description--button button button--pink">explore services</button>
        </div>

        <ListBlogPosts currentCategory={currentCategory} blogObject={secondBlog}  />
      </section>
    </>
  );
};
