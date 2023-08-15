import { useCallback, useEffect, useRef, useState } from "react";

import "../../Blog.component.css"
import "./BlogPostContent.css"

import { Link, useParams } from "react-router-dom";
import { Blog } from "../../../../types/blog.type";
import axios from 'axios';

type Props = {
  windowWidth: number;
  footerRef: React.RefObject<HTMLDivElement | null>;
  mainNavigationRef: React.RefObject<HTMLDivElement | null>;
};

export const Content: React.FC<Props> = ({windowWidth, footerRef, mainNavigationRef}) => {

  const { link } = useParams<{ link: string }>();

  const apiUrl = 'http://blog.local/wp-json/wp/v2'; 

  const [isNavigationFixed, setNavigationFixed] = useState(false);
  const [isNavigationFixedBottom, setNavigationFixedBottom] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const blogNavRef = useRef<HTMLDivElement | null>(null);

  const [blogPost, setBlogPost] = useState<Blog>();
  const [background, setBackground] = useState("");
  const [author, setAuthor] = useState({
    avatar: "",
    name: "",
    position: ""
  });

  async function fetchBlogPosts() {
    try {
      const response = await axios.get(`${apiUrl}/pages`);
      const parsedPosts = response.data.map((post: any) => {
        
        if (link !== post.slug) return;

        async function fetchBackground() {
          try {
            const attachmentApi = post._links['wp:attachment'][0].href;
            const attachmentResponse = await fetch(attachmentApi);
            const attachmentData = await attachmentResponse.json();
            if (attachmentData[0] != null) setBackground(attachmentData[0].guid.rendered);
          } catch (error) {
            console.error('Error fetching blog posts:', error);
          }
        }

        async function fetchAuthor() {
          try {
            const authorApi = post._links['author'][0].href;
            const authorResponse = await fetch(authorApi);
            const authorData = await authorResponse.json();
            setAuthor({
              avatar: authorData.avatar_urls["96"],
              name: authorData.name,
              position: authorData.description
            });
          } catch (error) {
            console.error('Error fetching blog posts:', error);
          }
        }

        fetchBackground();
        fetchAuthor();

        const parser = new DOMParser();
        const doc = parser.parseFromString(post.content.rendered, 'text/html');

        let paragraphsArray: { id: number, heading: string | null | undefined, content: string | null | undefined }[] = [];

        const mainInfoArray = doc.querySelectorAll('.mainInfoArray');

        Array.from(mainInfoArray).map(paragraph => {
          const mainInfo = Array.from(paragraph.querySelectorAll('.mainInfo'));
          mainInfo.map((info, index) => {
              paragraphsArray.push({
                id: index,
                heading: info.querySelector('.wp-block-heading')?.textContent, 
                content: info.querySelector('.content')?.textContent
              });
  
          });
        });

        //console.log(doc.querySelector('.wp-block-site-tagline')?.textContent);
        

        return ({
          title: post.title.rendered,
          category: doc.querySelector('.category')?.textContent,
          serviceItem: doc.querySelector('.serviceItem')?.textContent,
          link: post.slug,
          content: {
            headInfo: {
              title: post.title.rendered,
              description: doc.querySelector('.wp-block-site-tagline')?.textContent,
              autor: {
                avatar: "",
                name: "",
                position: ""
              },
              timeToRead: doc.querySelector('.timeToRead')?.textContent,
              creationDate: formatDate(post.date)
            },
            description: doc.querySelector('.description')?.textContent,
            mainInfo: paragraphsArray
          }
        });
      });

      parsedPosts.forEach((element: Blog, index: number) => {
        if (parsedPosts[index] != null) {
          setBlogPost(parsedPosts[index]);   
        }
      });
      
    } 
    catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogPosts();
  }, []);
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (headerRef.current && footerRef.current && mainNavigationRef.current && blogNavRef.current) {
      const headerHeight = headerRef.current.clientHeight;
      const footerHeight = footerRef.current.clientHeight;
      const mainNavHeight = mainNavigationRef.current.clientHeight;
      const blogNavHeight = blogNavRef.current.clientHeight;

      const scrollY = window.scrollY;      

      const marginBottom = 200;
      const maxScroll = document.body.scrollHeight - (footerHeight + marginBottom + mainNavHeight + blogNavHeight);
      
      if (scrollY > headerHeight && scrollY < maxScroll) {
        setNavigationFixed(true);
        setNavigationFixedBottom(false);
      }
      else if (scrollY >= maxScroll) {
        setNavigationFixed(false);
        setNavigationFixedBottom(true);
      }
      else {
        setNavigationFixed(false);
        setNavigationFixedBottom(false);
      }
    }
  }

  function formatDate(inputDate: string) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }  
  
  return (
    <section className="blog_post-content">
      <div 
        ref={headerRef}
        className="blog_post--header--bg bg--gradient"
        style={{ background:  `url(${background}) center/cover no-repeat` }}
        >
        <div className="container blog_post--header--text">
          <div className="blog_post--header---description">
            <h1 className="h1">{blogPost?.content.headInfo.title}</h1>
            <p className="p">{blogPost?.content.headInfo.description}</p>
          </div>
          <div className="blog_post--header---info">
            <div className="about_autor">
              <img src={author.avatar}></img>
              <div className="about_autor-text">
                <span className="span autor_name">{author.name}</span>
                <span className="span">{author.position}</span>
              </div>
            </div>
            <div className="about_time">
              <span className="span">{blogPost?.content.headInfo.timeToRead} read</span>
            </div>
            <div className="about_create_date">
              <span className="span">{blogPost?.content.headInfo.creationDate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="top-link--container">
        <Link className="top-link top-link__home" to="/">
          Home
        </Link>{" "}
        &#62;{" "}
        <Link className="top-link top-link__resources" to="/resources">
          Resources
        </Link>{" "}
        &#62;{" "}
        <Link className="top-link top-link__resources" to="/resources/blog">
          Blog
        </Link>
        &#62;{" "}
        <span className="top-link">{blogPost?.title}</span>
      </div>
      <div className="container main-columns">
        <div className="left--column">
          <div className="blog_post--description">
            <p className="p">{blogPost?.content.description}</p>
          </div>
          <div className="blog_post--main_part">
            {blogPost?.content.mainInfo.map((content) => (
              <div 
                className="main_part--content"
                key={content.id}
                id={content.heading}
                >
                <h2 className="h2">{content.heading}</h2>
                <p className="p">{content.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`right--column`}>
            <div
              ref={blogNavRef}
              className={
                `navigation-blog--content 
                ${isNavigationFixed ? 'fixed-navigation' : ''}
                ${isNavigationFixedBottom ? 'fixed-navigation--bottom' : ''}
                `}>
              <div className="contents_table">
                <h3>table of contents</h3>
              </div>
              <ul className="blog--navigation">
                {blogPost?.content.mainInfo.map((content) => (
                  <li
                    className="li navigation--link"
                    key={content.id}
                    >
                    <a className="a" href={`#${content.heading}`}>{content.heading}</a>
                  </li>
                ))}
              </ul>
              <div className="network_links">
                <ul className="ul network_links-list">
                  <li className="li network_item">
                    <a href="https://www.instagram.com/jetoffice.assistance/" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_instagram.svg"></img></a>
                  </li>
                  <li className="li network_item">
                    <a href="https://twitter.com/JetOffice23" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_twitter.svg"></img></a>
                  </li>
                  <li className="li network_item">
                    <a href="https://www.linkedin.com/company/jetoffice-ua/" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_linkedin.svg"></img></a>
                  </li>
                  <li className="li network_item">
                    <a href="" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_share.svg"></img></a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
    
  );
};
