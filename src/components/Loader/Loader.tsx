import React from 'react';

import './Loader.css';

export const Loader = () => (
  <div className="loader">
    <div className="loader__inner">
      <div className="loader__inner__item loader__inner__item--1"></div>
      <div className="loader__inner__item loader__inner__item--2"></div>
      <div className="loader__inner__item loader__inner__item--3"></div>
    </div>
  </div>
);