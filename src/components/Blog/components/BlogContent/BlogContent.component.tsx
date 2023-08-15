import { useCallback, useRef, useEffect, useState } from "react";
import { firstBlog } from "../../../../data/blog.json";
import { secondBlog } from "../../../../data/blog.json";

import { ListBlogPosts } from "../ListBlogPosts";
import { BlogCategory } from "../BlogCategory";
import { BlogPost } from "../BlogPost";
import axios from 'axios';

import "../../Blog.component.css"
import { Blog } from "../../../../types/blog.type";

type Props = {
  currentCategory: string[];
  setCurrentCategory: (currentCategory: string[]) => void;
};

export const DEFAULT_BLOG_CATEGORY = "All";

export const BlogContent: React.FC<Props> = ({currentCategory, setCurrentCategory}) => {
 
  const apiUrl = 'http://blog.local/wp-json/wp/v2'; 
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  async function fetchBlogPosts() {
    try {
      const response = await axios.get(`${apiUrl}/pages`);
      const parsedPosts = await Promise.all(response.data.map(async (post: any, index: number) => {
        
        const attachmentApi = post._links['wp:attachment'][0].href;
        let background = "";
        try {
          const attachmentResponse = await fetch(attachmentApi);
          const attachmentData = await attachmentResponse.json();
          if (attachmentData[0] != null) 
             background = attachmentData[0].guid.rendered;
        } 
        catch (error) {
          console.error('Error:', error);
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');

        const category = doc.querySelector('.category');
        const serviceItem = doc.querySelector('.serviceItem');
        
        return ({
          id: index,
          title: post.title.rendered,
          background: background,
          category: category?.textContent,
          serviceItem: serviceItem?.textContent,
          link: post.slug
        })
      }));
      setBlogPosts(parsedPosts);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchBlogPosts();
  }, []); 


  return (
    <>
      <section id="blog--content">
        <ListBlogPosts currentCategory={currentCategory} blogObject={blogPosts}  />

        <div id="description--container">
          <p className="description--text">
            We offer virtual assistants and concierge services trusted by companiesand businessmen 
            to manage tasks, calendars, shopping, events, bills, documents, SMM, and more.In our work, 
            we use process automation and AI to achieve success and solve problems at maximum speed!</p>
          <button className="description--button button button--pink">explore services</button>
        </div>

        {/* <ListBlogPosts currentCategory={currentCategory} blogObject={secondBlog}  /> */}
      </section>
    </>
  );
};
