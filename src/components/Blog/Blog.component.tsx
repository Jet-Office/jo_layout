import { BlogContent } from "./components/BlogContent";
import { Link } from "react-router-dom";
import "./Blog.component.css"
import { BlogCategoryList } from "./components/BlogCategoryList";
import { useState } from "react";

export const Blog: React.FC = () => {

  const [ currentCategory, setCurrentCategory ] = useState<string[]>([]);

  return (
    <div id="blog" className="blog">
      <section className="blog--container">
        <div className="blog--header-part">
          <section className="blog--top-part bg--gradient">
            {/* <h1>Blog</h1> */}
            <p></p>
          </section>
          <div className="top-link">
            <Link className="top-link__home" to="/">
              Home
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link__resources" to="/resources">
              Resources
            </Link>{" "}
            &#62;{" "}
            Blog
          </div>
        </div>

        <BlogCategoryList 
            currentCategory={ currentCategory } 
            setCurrentCategory={ setCurrentCategory }
          ></BlogCategoryList>

        <div className="blog--section">
          <BlogContent
            currentCategory={ currentCategory } 
            setCurrentCategory={ setCurrentCategory }
          ></BlogContent>
        </div>
      </section>
    </div>
  )
};
