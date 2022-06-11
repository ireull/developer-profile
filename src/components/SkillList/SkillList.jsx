import React, { useEffect, useRef, useState } from "react";
import Input from "../../ui/Input/Input";
import Skill from "../Skill/Skill";

import styles from "./SkillList.module.scss";

const SkillList = () => {
  const [skills, setSkills] = useState([
    { name: "PHP" },
    { name: "Ruby" },
    { name: "JavaScript" },
  ]);
  const [skill, setSkill] = useState("");
  const [isAddSkillActive, setIsAddSkillActive] = useState(false);

  const addSkill = (e) => {
    const newSkill = { id: skills.length + 1, name: skill };
    if (e.key === "Enter") {
      setSkills([...skills, newSkill]);
      setIsAddSkillActive(false);
      setSkill("");
    }
  };
  const skillValue = (e) => {
    setSkill(e.target.value);
  };
  const toggleSkillActive = () => {
    setIsAddSkillActive(!isAddSkillActive);
  };
  return (
    <div className={styles.skillList}>
      {skills.map((skill) => (
        <Skill key={skill.name} name={skill.name} />
      ))}
      {!isAddSkillActive && (
        <div className={styles.addSkill} onClick={toggleSkillActive}>
          <img src="img/plus.svg" alt="plus" />
        </div>
      )}
      {isAddSkillActive && (
        <div className={styles.customInput}>
          <input value={skill} onChange={skillValue} onKeyDown={addSkill} />
        </div>
      )}
    </div>
  );
};

export default SkillList;
