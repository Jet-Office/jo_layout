import { BlogPost } from "../BlogPost";
import { Blog } from "../../../../types/blog.type";

import "../../Blog.component.css"
import { Route, Routes } from "react-router-dom";
import { Content } from "../Content";

type Props = {
  currentCategory: string[];
  blogObject: Blog[];
};

export const ListBlogPosts: React.FC<Props> = ( {currentCategory, blogObject} ) => {

  return (
    <>
      <div className="blog-list--posts">
        {blogObject.map((blog) => (
          currentCategory.length === 0
          || (!currentCategory.some(item => item.charAt(0) === '#') && currentCategory.includes(blog.serviceItem))
          || (!currentCategory.some(item => item.charAt(0) !== '#') && currentCategory.includes(blog.category))
          || (currentCategory.some(item => item.charAt(0) === '#') && currentCategory.includes(blog.category) && currentCategory.includes(blog.serviceItem))
          ? <>
            <Routes>
              <Route path={`/resources/blog/${blog.title}`} element={
                <Content blog={blog} />
              } />
            </Routes>
            <BlogPost blog={blog} key={blog.id} /> 
            </>
          : null
        ))}
      </div>

    </>
  );
};
