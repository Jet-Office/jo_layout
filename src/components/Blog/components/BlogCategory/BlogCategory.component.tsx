import { useCallback, useState } from "react";
import { BlogCategories } from "../../../../types/blogCategories.type";
import { DEFAULT_BLOG_CATEGORY } from "../BlogContent";
import classNames from 'classnames';

type Props = {
  category: BlogCategories;
  currentCategory: string[];
  setCurrentCategory: (currentCategory: string[]) => void;
};

export const BlogCategory: React.FC<Props> = ({ category, currentCategory, setCurrentCategory }) => {

  const [isPressed, setIsPressed] = useState(false);
  const categoryClasses = classNames('category--item', { 'active': currentCategory.includes(category.name), 'default-bg': isPressed,  'pink-bg': !isPressed });

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const removeItem = (name: string) => {
    const updatedArray = currentCategory.filter(item => item !== name);
    setCurrentCategory(updatedArray);
  };

  return (
    <section className="blog--category">
      <div 
        className={categoryClasses}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={() => { 
          currentCategory.includes(category.name)
          ? removeItem(category.name)
          : setCurrentCategory([...currentCategory, category.name]);
          console.log(currentCategory); }}
        >
          {category.name}
      </div>
    </section>

  )
};
