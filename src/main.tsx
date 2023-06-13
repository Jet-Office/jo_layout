import React, { Dispatch, SetStateAction, createContext} from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

type isViewType = boolean;

type ModalPropsContext = [isViewType, Dispatch<SetStateAction<boolean>>];

const ModalContext = createContext<ModalPropsContext>([false, () => {}]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
