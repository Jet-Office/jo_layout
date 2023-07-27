import { BlogContent } from "./components/BlogContent";

import "./Blog.component.css"

type Props = {
  windowWidth: number;
};

export const Blog: React.FC<Props> = ({ windowWidth }) => {


  return (
    <div id="blog" className="blog">
      <section className="blog--container">
        <section className="blog--top-part">
          <h1>Articles and Resources</h1>
          <p></p>
        </section>
        <BlogContent windowWidth={windowWidth}></BlogContent>
      </section>
    </div>
  );
};
