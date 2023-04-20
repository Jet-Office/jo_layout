import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";

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
        <Services />
        <Benefits />
      </main>
    </div>
  );
}

export default App;
