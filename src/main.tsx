import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { ModalProvider } from "./modalProvider";
import { DropdownProvider } from "./DropdownContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModalProvider>
    <DropdownProvider>
      <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </BrowserRouter>
    </DropdownProvider>
  </ModalProvider>
);
