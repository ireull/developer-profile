import React from "react";
import styles from "./Skill.module.scss";

const Skill = ({ name, deleteSkill }) => {
  return (
    <div className={styles.skill}>
      {name}
      <div className={styles.skillDelete} onClick={() => deleteSkill(name)} />
    </div>
  );
};

export default Skill;
