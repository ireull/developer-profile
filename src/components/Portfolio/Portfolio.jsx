import React from "react";

import styles from "./Portfolio.module.scss";

import PortfolioList from "../PortfolioList/PortfolioList";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
      <ul className={styles.portfolioList}>
        <PortfolioList />
      </ul>
    </div>
  );
};

export default Portfolio;
