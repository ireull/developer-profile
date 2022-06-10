import React from "react";

import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <ul>
        <li>
          <span>PHP</span>
          <span>6 years</span>
        </li>
        <li>
          <span>Ruby</span>
          <span>2 years</span>
        </li>
        <li>
          <span>JavaScript</span>
          <span>4,5 years</span>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
