import React, { useContext } from "react";
import Context from "../../context/context";

import Input from "../../ui/Input/Input";
import ExpContent from "../ExpContent/ExpContent.jsx";
import ExpList from "../ExpList/ExpList.jsx";

import styles from "./Experience.module.scss";

const Experience = () => {
  const { skills, setSkills } = useContext(Context);

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
