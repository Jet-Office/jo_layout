import { useCallback, useState } from "react";
import { Blog } from "../../../../types/blog.type";

import "../../Blog.component.css"
import { Route, Routes, useParams } from "react-router-dom";

type Props = {
  blog: Blog
};

export const Content: React.FC<Props> = ( { blog } ) => {

  
  return (
    <div>
      <h1>HT</h1>
    </div>
    
  );
};
