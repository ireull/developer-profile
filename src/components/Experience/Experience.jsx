import React, { useContext } from "react";

import ExpList from "../ExpList/ExpList.jsx";

import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <ul className={styles.experienceList}>
        <ExpList />
      </ul>
    </div>
  );
};

export default Experience;
