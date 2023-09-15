import { BlogContent } from "./components/BlogContent";
import { Link } from "react-router-dom";
import "./Blog.component.css"
import { BlogCategoryList } from "./components/BlogCategoryList";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <div id="blog" className="blog">
        <Helmet>
          <title>JetOffice | Blog</title>
          <meta
            name="description"
            content="Explore a Wealth of Insights with JetOffice's Blog: Cases and Lifehacks in Coaching, Leadership, Design, Development, Project Management, Calendars, Documents, Business Events, Assistance, HR, and Social Media."
          />
        </Helmet>
        <section className="blog--container">
          <div className="blog--header-part">
            <section className="blog--top-part bg--gradient">
              <div className="header_info">
                <h1>Articles</h1>
                <p>Here you will find useful information about how we carry out cases. Articles are constantly updated, stay tuned and join JetOffice.</p>
              </div>
            </section>
            <div className="top-link--container">
              <Link className="top-link top-link__home" to="/">
                Home
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
    </HelmetProvider>
  )
};
