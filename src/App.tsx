import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Pricing } from "./components/Pricing";
import { Cases } from "./components/Cases";
import { About } from "./components/About";
import { Crew } from "./components/Crew";
import { ControlPreview } from "./components/ControlPreview";

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
          <Cases />
          <About />
          <Crew />
        </div>
      </main>
    </div>
  );
}

export default App;
