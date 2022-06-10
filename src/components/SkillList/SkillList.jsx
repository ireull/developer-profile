import React from "react";
import Skill from "../Skill/Skill";

import styles from "./SkillList.module.scss";

const SkillList = () => {
  return (
    <div className={styles.skillList}>
      <Skill name="PHP" />
      <Skill name="Ruby" />
      <Skill name="JavaScript" />
      <div className={styles.addSkill}>
        <img src="img/plus.svg" alt="plus" />
      </div>
    </div>
  );
};

export default SkillList;
