import React from "react";
import ReactDOM from "react-dom/client";

import {  HashRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { ModalProvider } from "./modalProvider";
import { DropdownProvider } from "./DropdownContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en','ru','fr','de','ua'],
  fallbackLng: "en",
  detection: {
    order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie']
  },
  backend: {
   loadPath: '/locales/{{lng}}/translation.json',
  },
  

});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModalProvider>
    <DropdownProvider>
      <HashRouter>
        <React.StrictMode>
          <ScrollToTop />
            <App />
        </React.StrictMode>
      </HashRouter>
    </DropdownProvider>
  </ModalProvider>
);
