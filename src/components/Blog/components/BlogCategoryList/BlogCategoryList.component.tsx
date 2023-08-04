import { useEffect, useRef, useState } from "react";
import { blogCategories } from "../../../../data/blogCategories.json";
import { BlogCategory } from "../BlogCategory/BlogCategory.component";

type Props = {
  currentCategory: string[];
  setCurrentCategory: (currentCategory: string[]) => void;
  windowWidth: number;
};

export const BlogCategoryList: React.FC<Props> = ({ currentCategory, setCurrentCategory, windowWidth }) => {

  const [ activeCategories, setActiveCategories ] = useState(false);

  
  const handleClick = () => {
    if (activeCategories) setActiveCategories(false);
    else setActiveCategories(true);
  };


  return (
    <div id="scroll--blog--categories">
      { windowWidth <= 769 
        ? <section 
          className={`blog--category category--menu ${!activeCategories ? 'inactive' : ''}`}
          onClick={ handleClick }
          >
            <div>Categories</div>
            <img src="/helpers-icons/chevron-down.svg"></img>
          </section>
        : null }
      <section id="blog--categories">
        {blogCategories.map((category) => (
          windowWidth > 769 || (activeCategories && category.name[0] != '#') ?
            <BlogCategory
              key={category.id}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              category={category}
            ></BlogCategory>
            : null
          ) 
        )}
      </section>
    </div>

  )
};
