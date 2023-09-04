import { useEffect, useState } from "react";

import { ListBlogPosts } from "../ListBlogPosts";
import axios from 'axios';

import { Helmet, HelmetProvider } from "react-helmet-async";

import "../../Blog.component.css"
import { Blog } from "../../../../types/blog.type";

type Props = {
  currentCategory: string[];
  setCurrentCategory: (currentCategory: string[]) => void;
};

export const DEFAULT_BLOG_CATEGORY = "All";

export const apiUrlBlog = 'https://wordpress.jetoffice.org/wp-json/wp/v2'; 

export const BlogContent: React.FC<Props> = ({currentCategory, setCurrentCategory}) => {
 
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);

  async function fetchBlogPosts() {
    try {
      const response = await axios.get(`${apiUrlBlog}/posts`);
      const parsedPosts = await Promise.all(response.data.map(async (post: any, index: number) => {        

        //const attachmentApi = post._links['wp:attachment'][0].href;
        let background = "";

        if (post._links['wp:featuredmedia']) {
        
          const attachmentApi = post._links['wp:featuredmedia'][0].href;

          try {
            const attachmentResponse = await fetch(attachmentApi);
            const attachmentData = await attachmentResponse.json();
            
            if (attachmentData != null) 
              background = attachmentData.guid.rendered;
          } 
          catch (error) {
            console.error('Error:', error);
          }
        }

        //const parser = new DOMParser();
        //const doc = parser.parseFromString(post.content.rendered, 'text/html');

        //const category = doc.querySelector('.category');
        //const serviceItem = doc.querySelector('.serviceItem');
        
        return ({
          id: index,
          title: post.title.rendered,
          background: post.jetpack_featured_media_url,
          category: post.acf.hashtag,
          serviceItem: post.acf.serviceItem,
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
    <HelmetProvider>
      <section id="blog--content">
        <Helmet>
        </Helmet>
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
    </HelmetProvider>
  );
};
