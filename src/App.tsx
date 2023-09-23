import { useState, useEffect, useRef, useContext } from "react";

import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./App.css";

import { Header } from "./components/NewHeader";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Cases } from "./components/Cases";
import { Partners } from "./components/Partners";

import { ControlPreview } from "./components/ControlPreview";
import { Modal } from "./components/Modal/Modal";
import { ModalContext } from "./modalProvider";
import { Footer } from "./components/Footer";
import { ServicesPage } from "./components/ServicesPage";
import { ListOfServices } from "./components/ListOfServices";
import { NotFound } from "./components/NotFound";
import { ServiceDescription } from "./components/ServiceDescription";
import {SectionHead} from "./components/SectionHead";
import { FAQPage } from "./components/FAQPage";

import { Blog } from "./components/Blog";
import { Content } from "./components/Blog/components/Content/Content.component";
import { PricingPage } from "./components/PricingPage";
import { faqData } from "./data/faqData.json";
import { AboutPage } from "./components/AboutPage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import GameLoader from "./components/GameLoader/GameLoader";

type FAQItem = {
  id: number;
  question: string;
  text: string;
};

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const homePageRef = useRef<HTMLElement>(null);
  const servicesPageRef = useRef<HTMLElement>(null);
  const pricingPageRef = useRef<HTMLElement>(null);
  const casesPageRef = useRef<HTMLElement>(null);
  const aboutPageRef = useRef<HTMLElement>(null);
  const contactsPageRef = useRef<HTMLElement>(null);
  
  const [activePageRef, setActivePageRef] =
    useState<React.RefObject<HTMLElement>>(homePageRef);

    useEffect(() => {
      const options = {
        rootMargin: "0px",
        threshold: 0.5,
      };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "home":
              setActivePageRef(homePageRef);
              break;
            case "services":
              setActivePageRef(servicesPageRef);
              break;
            case "pricing":
              setActivePageRef(pricingPageRef);
              break;
            case "cases":
              setActivePageRef(casesPageRef);
              break;
            case "about":
              setActivePageRef(aboutPageRef);
              break;
            case "contacts":
              setActivePageRef(contactsPageRef);
              break;
            default:
              setActivePageRef(homePageRef);
          }
        }
      });
    }, options);

    if (homePageRef.current) {
      observer.observe(homePageRef.current);
    }

    if (servicesPageRef.current) {
      observer.observe(servicesPageRef.current);
    }

    if (pricingPageRef.current) {
      observer.observe(pricingPageRef.current);
    }

    if (casesPageRef.current) {
      observer.observe(casesPageRef.current);
    }

    if (aboutPageRef.current) {
      observer.observe(aboutPageRef.current);
    }

    if (contactsPageRef.current) {
      observer.observe(contactsPageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [active, setActive] = useContext(ModalContext);

  const [faqItems, setFaqItems] = useState(faqData);
  const [options, setOptions] = useState('yearly');
  const [activeCardId, setActiveCardId] = useState(3);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadResources() {
      try {

        setIsLoading(false);
      } catch (error) {
        console.error("Помилка завантаження ресурсів", error);
      }
    }

    loadResources();
  }, []);


  return (
    <div className="App">

      <Modal active={active} setActive={setActive} />
      <Header
        activePageRef={activePageRef}
        windowWidth={windowWidth}
      />

      <Routes>
        <Route path="" element={
          <>
            <SectionHead homePageRef={homePageRef}/>
            <main className="main">
              <div className="main__container">
                {windowWidth > 641 && <Partners />}
                <Services activeRef={servicesPageRef} />
                {windowWidth <= 641 && <ControlPreview />}
                <Benefits />
                <Cases windowWidth={windowWidth} casesPageRef={casesPageRef} />
              </div>
            </main>
          </>
        } />
        <Route path="services/:link" element={
          <ListOfServices />
        } />
        <Route path="services" element={
          <ServicesPage />
        } />
        <Route path="services/:link/:subLink" element={
          <ServiceDescription />
        } />
        <Route path="resources/blog" element={
          <Blog />
        } />
        <Route path="resources/blog/:link" element={
          <Content windowWidth={windowWidth}/>
        } />
        <Route path="faq" element={
          <FAQPage />
        } />
        <Route 
          path="/pricing"
          element={
            <PricingPage
              windowWidth={windowWidth}
              activePageRef={pricingPageRef}
              options={options}
              setOptions={setOptions}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
            />
          }
        />
        <Route path="about" element={
          <AboutPage
          windowWidth={windowWidth} 
          aboutPageRef={aboutPageRef}
          />
        } />
        <Route path="loader" element={
            <GameLoader />
          }
        />
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
      <footer className="footermain">
        <Footer contactsPageRef={contactsPageRef} />
        <ScrollToTopButton />
      </footer>
    </div>
  );
}

export default App;