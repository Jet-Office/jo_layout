import { useCallback, useEffect, useRef, useState } from "react";

import "../../Blog.component.css"
import "./BlogPostContent.css"
import { apiUrlBlog } from "../BlogContent";

import { Link, useParams } from "react-router-dom";
import { Blog } from "../../../../types/blog.type";
import axios from 'axios';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContentTable } from "../ContentTable";
import { MobileMenu } from "../MobileMenu";

import parser from 'html-react-parser';


type Props = {
  windowWidth: number;
};


export const Content: React.FC<Props> = ({windowWidth}) => {

  const { link } = useParams<{ link: string }>();

  const [blogPost, setBlogPost] = useState<Blog>();
  const [avatar, setAvatar] = useState("");

  async function fetchBlogPosts() {
    try {
      const response = await axios.get(`${apiUrlBlog}/posts`);
      const parsedPosts = response.data.map((post: any) => {
        
        if (link !== post.slug) return;

        async function fetchAuthor() {
          try {
            const avatarApi = apiUrlBlog + '/media/' + post.acf.avatar;            

            if (avatarApi != null) {
              const authorResponse = await fetch(avatarApi);
              const authorData = await authorResponse.json();              
              setAvatar(authorData.media_details.sizes["full"].source_url);
          }
          } catch (error) {
            console.error('Error fetching blog posts:', error);
          }
        }

        fetchAuthor();

        let paragraphsArray: { id: number, heading: string | null | undefined, content: string | null | undefined }[] = [];
        const mainInfoArray = post.acf.mainInfoArray;

        Object.keys(mainInfoArray).map((key, index) => {
          const element = mainInfoArray[key];          
          paragraphsArray.push({
            id: index,
            heading: element['header'],
            content: element['paragraph']
          });
        });
        
        return ({
          title: post.title.rendered,
          background: post.jetpack_featured_media_url,
          category: post.acf.hashtag,
          serviceItem: post.acf.serviceItem,
          link: post.slug,
          content: {
            headInfo: {
              title: post.title.rendered,
              description: post.acf.description,
              timeToRead: post.acf.timeToRead,
              creationDate: formatDate(post.date),
              author: {
                name: post.acf.authorName,
                position: post.acf.authorPosition
              },
            },
            // description: post.acf.postDescription,
            mainInfo: paragraphsArray
          }
        });
      });

      parsedPosts.forEach((element: Blog, index: number) => {
        if (parsedPosts[index] != null) {
          setBlogPost(parsedPosts[index]);   
        }
      });
      
    } 
    catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogPosts();
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const elementRect = element?.getBoundingClientRect();
    if (elementRect) {
      const elementTop = elementRect.top + window.scrollY;
      window.scrollTo({ top: elementTop - 80, behavior: 'smooth' });
    }
  };

  function formatDate(inputDate: string) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }  

  return (
    <HelmetProvider>
      <section className="blog_post-content">
        <Helmet>
          <title>JetOffice© | {String(blogPost?.content.headInfo.title)}</title>
          <meta property="og:url" content={"https://www.jetoffice.org/#/resources/blog/" + link} /> 
          <meta
            name="description"
            content={String(blogPost?.content.headInfo.description)}
          />
          <meta property="og:title" content={blogPost?.content.headInfo.title} />
          <meta property="og:description" content={blogPost?.content.headInfo.description} />
          <meta property="og:type" content="article" />
          <meta property="article:author" content={blogPost?.content.headInfo.author.name} />
          <meta property="og:site_name" content="JetOffice" />
          <meta property="og:url" content={"https://www.jetoffice.org/#/resources/blog/" + link}  />
          <meta property="og:image" content={blogPost?.background} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@jetoffice" />
          <meta name="twitter:title" content={`JetOffice© | ${String(blogPost?.content.headInfo.title)}`} />
          <meta name="twitter:description" content={blogPost?.content.headInfo.description} />
          <meta name="twitter:image" content={blogPost?.background} />
        </Helmet>

        {windowWidth <= 875
          ? <MobileMenu windowWidth={windowWidth} blogPost={blogPost} scrollToSection={scrollToSection} />
          : null
          }
        <div 
          className="blog_post--header--bg bg--gradient"
          style={{ background:  `${
              `url(${blogPost?.background}) center/cover no-repeat`
          }`, }}
          >
          <div className="container blog_post--header--text">
            <div className="blog_post--header--description---container">
              <div className="blog_post--header---description">
                <h1 className="h1">{blogPost?.content.headInfo.title}</h1>
                <p className="p">{blogPost?.content.headInfo.description}</p>
              </div>
            </div>
            <div className="blog_post--header---info">
              <div className="about_autor">
                <img src={avatar}></img>
                <div className="about_autor-text">
                  <span className="span autor_name">{blogPost?.content.headInfo.author.name}</span>
                  <span className="span">{blogPost?.content.headInfo.author.position}</span>
                </div>
              </div>
              <div className="about_info">
                <div className="about_time">
                  <span className="span">{blogPost?.content.headInfo.timeToRead} read</span>
                </div>
                <div className="about_create_date">
                  <span className="span">{blogPost?.content.headInfo.creationDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        { windowWidth > 641 ? 
          <div className="top-link--container top-link--container_post">
            <Link className="top-link top-link__home" to="/">
              Home
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link top-link__resources" to="/resources">
              Resources
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link top-link__resources" to="/resources/blog">
              Blog
            </Link>
            &#62;{" "}
            <span className="top-link">{blogPost?.title}</span>
          </div>
          : null
        }
        <div className="container main-columns">
          <div className="left--column">
            {/* <div className="blog_post--description">
              <p className="p">{blogPost?.content.description}</p>
            </div> */}
            <div className="blog_post--main_part">
              {blogPost?.content.mainInfo.map((content) => (
                <div 
                  className="main_part--content"
                  key={content.id}
                  id={`${content.heading}`}
                  >
                  {content.heading ? <h2 className="h2">{content.heading}</h2>
                  : null}
                  
                  <p className="p">{parser(content.content)}</p>
                </div>
              ))}
            </div>
          </div>
          {windowWidth > 875
          ? <ContentTable 
              windowWidth={windowWidth} 
              blogPost={blogPost} 
              handleClick={function (): void {} }
              scrollToSection={scrollToSection} />
          : null
          }
        </div>
      </section>
    </HelmetProvider>
  );
};
