import { useCallback, useEffect, useRef, useState } from "react";

import "../../Blog.component.css"
import "./BlogPostContent.css"

import { Link, Route, Routes, useParams } from "react-router-dom";
import { firstBlog, secondBlog } from "../../../../data/blog.json";

type Props = {
  windowWidth: number;
  footerRef: React.RefObject<HTMLDivElement | null>;
  mainNavigationRef: React.RefObject<HTMLDivElement | null>;
};

export const Content: React.FC<Props> = ({windowWidth, footerRef, mainNavigationRef}) => {

  const { link } = useParams<{ link: string }>();
  const selectedBlog = firstBlog.find((blog) => blog.link === link) || secondBlog.find((blog) => blog.link === link);

  const [isNavigationFixed, setNavigationFixed] = useState(false);
  const [isNavigationFixedBottom, setNavigationFixedBottom] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const blogNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

      const marginBottom = 150;
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

  // useEffect(() => {
  //   const listenScrollEvent = () => {
  //     if ((window.scrollY > 113 && windowWidth > 1000) || window.scrollY > 87 ) {
  //       setNavigationFixed(false);
  //     } else {
  //       setNavigationFixed(true);
  //     }
  //   };
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, [windowWidth]);

  
  return (
    <section className="blog_post-content">
      <div 
        ref={headerRef}
        className="blog_post--header--bg bg--gradient"
        style={{ background:  `url(/blog-images/backgrounds/${selectedBlog?.background}.png) center/cover no-repeat` }}
        >
        <div className="container blog_post--header--text">
          <div className="blog_post--header---description">
            <h1 className="h1">{selectedBlog?.content.headInfo.title}</h1>
            <p className="p">{selectedBlog?.content.headInfo.description}</p>
          </div>
          <div className="blog_post--header---info">
            <div className="about_autor">
              <img src={selectedBlog?.content.headInfo.autor.avatar}></img>
              <div className="about_autor-text">
                <span className="span autor_name">{selectedBlog?.content.headInfo.autor.name}</span>
                <span className="span">{selectedBlog?.content.headInfo.autor.position}</span>
              </div>
            </div>
            <div className="about_time">
              <span className="span">{selectedBlog?.content.headInfo.timeToRead}</span>
            </div>
            <div className="about_create_date">
              <span className="span">{selectedBlog?.content.headInfo.creationDate}</span>
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
        <span className="span top-link">{selectedBlog?.title}</span>
      </div>
      <div className="container main-columns">
        <div className="left--column">
          <div className="blog_post--description">
            <p className="p">{selectedBlog?.content.description}</p>
          </div>
          <div className="blog_post--main_part">
            {selectedBlog?.content.mainInfo.map((content) => (
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
                {selectedBlog?.content.mainInfo.map((content) => (
                  <li
                    className="li navigation--link"
                    key={content.id}
                    >
                    <a className="a" href={`#${content.heading}`}>{content.heading}</a>
                  </li>
                ))}
              </ul>
              <div className="network_links"></div>
            </div>
        </div>
      </div>
    </section>
    
  );
};
