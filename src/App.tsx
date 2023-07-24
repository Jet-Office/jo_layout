import { useState, useEffect, useRef, useContext } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Cases } from "./components/Cases";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { Crew } from "./components/Crew";
import { ControlPreview } from "./components/ControlPreview";
import { Modal } from "./components/Modal/Modal";
import { ModalContext } from "./modalProvider";
import { Footer } from "./components/Footer";
import { Dropdown } from "./components/Dropdown";
import { ServicesPage } from "./components/ServicesPage";
import { ListOfServices } from "./components/ListOfServices";
import { NotFound } from "./components/NotFound";

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

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={
          <>
          <Modal active={active} setActive={setActive} />
            <Dropdown />
            <Header
              activePageRef={activePageRef}
              windowWidth={windowWidth}
              homePageRef={homePageRef}
            />
          
            <main className="main">
              <div className="main__container">
                <Services activeRef={servicesPageRef} />
                {windowWidth <= 641 && <ControlPreview />}
                <Benefits />
                <Pricing windowWidth={windowWidth} activePageRef={pricingPageRef} />
                <Cases windowWidth={windowWidth} casesPageRef={casesPageRef} />
                <About windowWidth={windowWidth} aboutPageRef={aboutPageRef} />
                <Faq />
                <Crew />
              </div>
            </main>

          </>
        } />
        <Route path="/services/:link" element={
          <ListOfServices
          activePageRef={activePageRef}
          windowWidth={windowWidth}
          active={active}
          setActive={setActive}
          />
        } />

        <Route path="/services" element={
          <ServicesPage
            activePageRef={activePageRef}
            windowWidth={windowWidth}
            active={active}
            setActive={setActive}
          />
        } />
        <Route path="*" element={
          <NotFound 
          activePageRef={activePageRef}
          windowWidth={windowWidth}
          active={active}
          setActive={setActive}
          />
        } />
      </Routes>
      <footer className="footermain">
        <Footer contactsPageRef={contactsPageRef} />
      </footer>
    </div>
  );
}

export default App;
