import React from "react";
import styles from "./Skill.module.scss";

const Skill = ({ name }) => {
  return <div className={styles.skill}>{name}</div>;
};

export default Skill;
