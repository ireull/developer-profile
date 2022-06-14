import React from "react";

import styles from "./Quote.module.scss";

const Quote = ({ title, subtitle }) => {
  return (
    <div className={styles.quote}>
      <h2>{title}</h2>
      <span className={styles.content}>{subtitle}</span>
    </div>
  );
};

export default Quote;
