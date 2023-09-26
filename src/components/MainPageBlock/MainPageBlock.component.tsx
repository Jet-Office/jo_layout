import { Link, useParams } from "react-router-dom";

import "./MainPageBlock.component.css";

export const MainPageBlock: React.FC = () => {  

  return (
    <div className="container">
      <div className="block">
        <div className="text-block">
          <h2>Virtual Assistance & Business Solutions:<br/>Human Driven, AI Empowered.</h2>
          <div className="buttons">
            <button className="button button--dark">Get in touch</button>
            <button className="button button--pink">Start free trial</button>
          </div>
        </div>
        <div className="img-block">
          <img src="/crew-photos/oksana_block_img.webp" alt="oksana" />
        </div>
      </div>
    </div>
  );
};
