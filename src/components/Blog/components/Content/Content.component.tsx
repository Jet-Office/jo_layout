import { useCallback, useState } from "react";

import "../../Blog.component.css"
import "./BlogPostContent.css"

import { Link, Route, Routes, useParams } from "react-router-dom";
import { firstBlog, secondBlog } from "../../../../data/blog.json";

export const Content: React.FC = () => {

  const { link } = useParams<{ link: string }>();
  const selectedBlog = firstBlog.find((blog) => blog.link === link) || secondBlog.find((blog) => blog.link === link);
  
  return (
    <section className="blog_post-content">
      <div 
        className="blog_post--header--bg bg--gradient"
        style={{ background:  `url(/blog-images/backgrounds/${selectedBlog?.background}.png) center/cover no-repeat` }}
        >
        <div className="container blog_post--header--text">
          <div className="blog_post--header---description">
            <h1>{selectedBlog?.content.headInfo.title}</h1>
            <p>{selectedBlog?.content.headInfo.description}</p>
          </div>
          <div className="blog_post--header---info">
            <div className="about_autor">
              <img src={selectedBlog?.content.headInfo.autor.avatar}></img>
              <div className="about_autor-text">
                <span className="autor_name">{selectedBlog?.content.headInfo.autor.name}</span>
                <span>{selectedBlog?.content.headInfo.autor.position}</span>
              </div>
            </div>
            <div className="about_time">
              <span>{selectedBlog?.content.headInfo.timeToRead}</span>
            </div>
            <div className="about_create_date">
              <span>{selectedBlog?.content.headInfo.creationDate}</span>
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
        <span className="top-link">{selectedBlog?.title}</span>
      </div>
      <div className="container main-columns">
        <div className="left--column">
          <div className="blog_post--description">
            <p>{selectedBlog?.content.description}</p>
          </div>
          <div className="blog_post--main_part">
            {selectedBlog?.content.mainInfo.map((content) => (
              <div 
                className="main_part--content"
                key={content.id}
                id={content.heading}
                >
                <h2>{content.heading}</h2>
                <p>{content.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right--column">
            <div className="contents_table">
              <h3>table of contents</h3>
            </div>
            <ul className="navigation">
              {selectedBlog?.content.mainInfo.map((content) => (
                <li
                  className="navigation--link"
                  key={content.id}
                  >
                  <a href={`#${content.heading}`}>{content.heading}</a>
                </li>
              ))}
            </ul>
            <div className="network_links"></div>
        </div>
      </div>
    </section>
    
  );
};
