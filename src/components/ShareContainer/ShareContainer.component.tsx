import React, { useState } from "react";
import "./ShareContainer.component.css";
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from "react-share";

import { Helmet, HelmetProvider } from "react-helmet-async";
type Props = {
  pageUrl: string;
  pageTitle: string;
  pageDescription: string;
};

{/* <div className="">
<a href={`https://telegram.me/share/url?url=${pageUrl}&text=${pageTitle}`}>
  Telegram
</a>
</div> */}
export const ShareContainer: React.FC<Props> = ({ pageUrl, pageTitle, pageDescription }) => {

  const [activeCopy, setActiveCopy] = useState(false);

  const handleCopy = () => {
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = window.location.href; 
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);

    setActiveCopy(true);
    setTimeout(() => {
      setActiveCopy(false);;
    }, 1000); 
  }

  return (
    <div className="network_links">
      <ul className="ul network_links-list">
        <li>
          <LinkedinShareButton
            url={pageUrl}
            title={pageTitle}
          >
            <img className="network_img" src="/contacts-icons/white_linkedin.svg" />
          </LinkedinShareButton>
        </li>
        
        <li>
          <TwitterShareButton
            url={pageUrl}
            title={pageTitle}
            via="JetOffice"
            hashtags={["JetOffice"]}>
            <img className="network_img" src="/contacts-icons/white_twitter.svg" />
          </TwitterShareButton>
        </li>

        <li className="li network_item">
          <div className={`network--link copy-btn ${activeCopy ? 'copy-btn--active' : ''}`}
            onClick={handleCopy}
            
            data-description="Link copied">
            <img className="network_img" src="/contacts-icons/white_share.svg" />
          </div>
        </li> 
{/*         
        <li>
          <a href="https://twitter.com/intent/tweet?url=https%3A%//www.jetoffice.org/#%2Fresources%2Fblog%2Fstreamlining-workflow&text=streamlining-workflow" 
            className="social-tw" 
            rel="nofollow" 
            target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li> */}

        {/* <li className="li network_item">
          <a href="https://www.instagram.com/jetoffice.assistance/" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_instagram.svg"></img></a>
        </li>
        <li className="li network_item">
          <a href="https://twitter.com/JetOffice23" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_twitter.svg"></img></a>
        </li>
        <li className="li network_item">
          <a href="https://www.linkedin.com/company/jetoffice-ua/" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_linkedin.svg"></img></a>
        </li>
        <li className="li network_item">
          <a href="" target="_blank" className="network--link"><img className="network_img" src="/contacts-icons/white_share.svg"></img></a>
        </li> */}
      </ul>
    </div> 
  )
};