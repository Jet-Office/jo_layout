import React from "react";
import "./ServicesPage.component.css";
import { MainContent } from "./component/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const ServicesPage: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="services-page">
        <Helmet>
          <title>Services | JetOffice</title>
          <meta
            name="description"
            content="Unlock Success with JetOffice's Services: Coaching, Leadership, Design & More. Explore Now!"
          />
        </Helmet>
        <MainContent />
      </div>
    </HelmetProvider>
  )
};