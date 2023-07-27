import { useCallback, useState } from "react";
import { BlogCategories } from "../../../../types/blogCategories.type";
import { DEFAULT_BLOG_CATEGORY } from "../BlogContent";
import classNames from 'classnames';

type Props = {
  category: BlogCategories;
  currentCategory: string;
  setCurrentCategory: (currentCategory: string) => void;
};

export const BlogCategory: React.FC<Props> = ({ category, currentCategory, setCurrentCategory }) => {

  const categoryClasses = classNames('category--item', { 'active': currentCategory === category.name });

  return (
    <section className="blog--category">
      <button 
        className={categoryClasses}
        onClick={() => { 
          currentCategory == DEFAULT_BLOG_CATEGORY || currentCategory != category.name
          ? setCurrentCategory(category.name)
          : setCurrentCategory(DEFAULT_BLOG_CATEGORY)
        }}
        >
          {category.name}
        </button>
    </section>

  )
};
