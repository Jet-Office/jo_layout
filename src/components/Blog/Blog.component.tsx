import { BlogContent } from "./components/BlogContent";
import { Link } from "react-router-dom";
import "./Blog.component.css"
import { BlogCategoryList } from "./components/BlogCategoryList";
import { useEffect, useState } from "react";

export const Blog: React.FC = () => {

  const [ currentCategory, setCurrentCategory ] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="blog" className="blog">
      <section className="blog--container">
        <div className="blog--header-part">
          <section className="blog--top-part bg--gradient">
            {/* <h1>Blog</h1> */}
            <p></p>
          </section>
          <div className="top-link--container">
            <Link className="top-link top-link__home" to="/">
              Home
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link top-link__resources" to="/resources">
              Resources
            </Link>{" "}
            &#62;{" "}
            <span className="top-link">Blog</span>
          </div>
        </div>

        <BlogCategoryList 
            currentCategory={ currentCategory } 
            setCurrentCategory={ setCurrentCategory }
            windowWidth={ windowWidth }
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
