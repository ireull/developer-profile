import React from "react";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <ul>
        <li>
          <a href="!#">Bootstrap 4 Material Design (Sample Link)</a>
        </li>
        <li>
          <a href="!#">Modern JavaScript stack</a>
        </li>
        <li>
          <a href="!#">Datepicker for twitter bootstrap</a>
        </li>
        <li>
          <a href="!#">Fast and reliable Bootstrap widgets in Angular</a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
