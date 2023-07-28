import { BlogContent } from "./components/BlogContent";
import { Link } from "react-router-dom";
import "./Blog.component.css"

type Props = {
};

export const Blog: React.FC<Props> = () => {


  return (
    <div id="blog" className="blog">
      <section className="blog--container">
        <section className="blog--top-part bg--gradient">
          <h1>Blog</h1>
          <p></p>
        </section>
        
        <div className="blog--section">
          <div className="top-link">
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
              </Link>{" "}
            </div>
          <BlogContent></BlogContent>
        </div>
      </section>
    </div>
  );
};
