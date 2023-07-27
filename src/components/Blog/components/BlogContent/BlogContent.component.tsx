import { useCallback, useState } from "react";
import { firstBlog } from "../../../../data/blog.json";
import { secondBlog } from "../../../../data/blog.json";
import { blogCategories } from "../../../../data/blogCategories.json";
import { Button } from "../../../Button";

import { BlogCategory } from "../BlogCategory";
import { BlogPost } from "../BlogPost";

import "../../Blog.component.css"

type Props = {
  windowWidth: number;
};

export const DEFAULT_BLOG_CATEGORY = "All";

export const BlogContent: React.FC<Props> = ( { windowWidth } ) => {
  const [ currentCategory, setCurrentCategory ] = useState(DEFAULT_BLOG_CATEGORY);

  return (
    <>
      <section id="blog--categories">
        {blogCategories.map((category) => (
            <BlogCategory
              key={category.id}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              category={category}
            ></BlogCategory>
          )
        )}
        
      </section>
      <section id="blog--content">
        <div className="first-blog--content">
          {firstBlog.map((blog) => (
            blog.category === currentCategory || blog.serviceItem === currentCategory || currentCategory === DEFAULT_BLOG_CATEGORY
            ? <BlogPost blog={blog} key={blog.id} /> 
            : null 
          ))}
        </div>

        <div id="description--container">
          <p className="description--text">
            We offer virtual assistants and concierge services trusted by companiesand businessmen 
            to manage tasks, calendars, shopping, events, bills, documents, SMM, and more.In our work, 
            we use process automation and AI to achieve success and solve problems at maximum speed!</p>
          <button className="description--button button button--pink">explore services</button>
        </div>

        <div className="second-blog--content">
          {secondBlog.map((blog) => (
            blog.category === currentCategory || blog.serviceItem === currentCategory || currentCategory === DEFAULT_BLOG_CATEGORY
            ? <BlogPost blog={blog} key={blog.id} /> 
            : null 
          ))}
        </div>
      </section>
    </>
  );
};
