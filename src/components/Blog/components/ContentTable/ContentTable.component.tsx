import "../../Blog.component.css"
import "./ContentTable.css"

import { Blog } from "../../../../types/blog.type";
import { ShareContainer } from "../../../ShareContainer";

type Props = {
  windowWidth: number;
  blogPost: Blog | undefined;
  handleClick: () => void;
  scrollToSection: (id: string) => void;
};

export const ContentTable: React.FC<Props> = ({windowWidth, blogPost, handleClick, scrollToSection}) => {
  const handleClickLink = (heading: string) => {
    scrollToSection(heading);
    handleClick();
  }

  return (
    <div className={`right--column`}>
      <div
        className={
          `navigation-blog--content 
          `}>
        <div className="contents_table">
          <h3>table of contents</h3>
        </div>
        <ul className="blog--navigation">
          {blogPost?.content.mainInfo.map((content) => (
            content.heading ?
            <li
              className="li navigation--link"
              key={content.id}
              >
              <a className="a" 
                onClick={() => handleClickLink(content.heading)}
                >{content.heading}</a>
            </li>
            : null
          ))}
          {windowWidth <= 875 
          ? <div className="back_button-container">
            <button 
              className="back_button"
              onClick={handleClick}
              >back</button>
          </div>
          : null}
        </ul>
        <ShareContainer 
          pageUrl={"https://www.jetoffice.org/#/resources/blog/" + blogPost?.link ?? ""} 
          pageTitle={blogPost?.title ?? ""} 
          pageDescription={blogPost?.content.description ?? ""}
        />
      </div>
    </div>
  );
};
