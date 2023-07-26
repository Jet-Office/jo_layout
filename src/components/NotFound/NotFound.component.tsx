import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.component.css";

export const NotFound: React.FC<Props> = ({
  windowWidth,
  activePageRef,
  active,
  setActive,
}) => {
  return (
    <>
      <div className="not-found" title="404">
        <div className="not-found__text">
          <h1 className="not-found__title">404 Not Found</h1>
          <p className="not-found__description">This page does not exist</p>
          <Link className="not-found__link" to="/">
            Back to main page
          </Link>
        </div>
        <img
          className="not-found__image"
          src="/not-found/rocket.png"
          alt="Rocket"
        />
      </div>
    </>
  );
};
