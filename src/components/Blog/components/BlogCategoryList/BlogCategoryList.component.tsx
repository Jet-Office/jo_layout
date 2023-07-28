import { useEffect, useRef } from "react";
import { blogCategories } from "../../../../data/blogCategories.json";
import { BlogCategory } from "../BlogCategory/BlogCategory.component";

type Props = {
  currentCategory: string[];
  setCurrentCategory: (currentCategory: string[]) => void;
};

export const BlogCategoryList: React.FC<Props> = ({ currentCategory, setCurrentCategory }) => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.scrollWidth;
      const visibleWidth = scrollContainerRef.current.clientWidth;
      const scrollLeft = (containerWidth - visibleWidth) / 2;
      scrollContainerRef.current.scrollLeft = scrollLeft;
    }
  }, []);


  return (
    <div id="scroll--blog--categories" ref={scrollContainerRef}>
      <section id="blog--categories">
        {blogCategories.map((category) => (
            <BlogCategory
              key={category.id}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              category={category}
            ></BlogCategory>
          )
        )}
      </section>
    </div>

  )
};
