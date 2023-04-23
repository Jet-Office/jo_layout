import { Buttons } from "../Buttons";
import "./About.component.css";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title h2">About us</h2>
          <div className="about__text">
            <p className="about__paragraph">JetOffice — virtual assistance and business solutions that will skyrocket your business. We provide everything needed for effective management and business development, distinguished by high-quality services, flexibility, and a personalized approach to each client. Our crew professionally delivers comprehensive business solutions, including virtual administrative support, consulting, and expertise in the fields of web development, web design, web-3, coaching, and more. Let us become your reliable flight control center for your business success.</p>
            <p className="about__paragraph">Our mission is to provide client-oriented virtual assistance, administrative support, and IT solutions through our network of partners. We strive to deliver exceptional service, build long-lasting relationships with our clients, and continuously improve our processes to exceed their expectations.</p>
          </div>
          <Buttons />
        </div>
        <div className="about__earth">
            <img src="./earth.png" alt="earth" className="about__earth_img" />
        </div>
      </div>
    </section>
  );
};
