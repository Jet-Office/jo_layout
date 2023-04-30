import { useState, useEffect } from "react";

import "./App.css";

import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Cases } from "./components/Cases";
import { About } from "./components/About";
import { Crew } from "./components/Crew";
import { ControlPreview } from "./components/ControlPreview";
import { Contacts } from "./components/Contacts";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Header windowWidth={windowWidth} />
      <main className="main">
        <div className="main__container">
          <Services />
          {windowWidth <= 641 && <ControlPreview />}
          <Benefits />
          <Pricing windowWidth={windowWidth} />
          <Cases windowWidth={windowWidth} />
          <About windowWidth={windowWidth} />
          <Crew />
          <Contacts />
        </div>
      </main>
      <footer className="footer">
        <p className="footer__label">© 2023 JetOffice</p>
      </footer>
    </div>
  );
}

export default App;
