import React from "react";
import ReactDOM from "react-dom/client";

import {  HashRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { ModalProvider } from "./modalProvider";
import { DropdownProvider } from "./DropdownContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModalProvider>
    <DropdownProvider>
      <HashRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </HashRouter>
    </DropdownProvider>
  </ModalProvider>
);
