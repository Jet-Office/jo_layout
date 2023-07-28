import { useCallback, useState } from "react";
import { firstBlog } from "../../../../data/blog.json";
import { secondBlog } from "../../../../data/blog.json";
import { blogCategories } from "../../../../data/blogCategories.json";

import { ListBlogPosts } from "../ListBlogPosts";
import { BlogCategory } from "../BlogCategory";
import { BlogPost } from "../BlogPost";

import "../../Blog.component.css"

type Props = {
};

export const DEFAULT_BLOG_CATEGORY = "All";

export const BlogContent: React.FC<Props> = () => {
  const [ currentCategory, setCurrentCategory ] = useState<string[]>([]);

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
