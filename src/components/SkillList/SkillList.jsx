import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../context/context";

import Skill from "../Skill/Skill";

import styles from "./SkillList.module.scss";

const SkillList = () => {
  const { skillsSort, setSkills } = useContext(Context);
  const [skill, setSkill] = useState("");
  const [isAddSkillActive, setIsAddSkillActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isAddSkillActive) {
      inputRef.current.focus();
    }
  }, [isAddSkillActive]);

  const addSkill = (e) => {
    if (e.key === "Enter") {
      const newSkill = { name: skill, exp: "..." };
      setSkills([...skillsSort, newSkill]);
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

  const deleteSkill = (name) => {
    setSkills(skillsSort.filter((skill) => skill.name !== name));
  };
  return (
    <div className={styles.skillList}>
      {skillsSort.map((skill) => (
        <Skill key={skill.name} name={skill.name} deleteSkill={deleteSkill} />
      ))}
      {!isAddSkillActive && (
        <div className={styles.addSkill} onClick={toggleSkillActive}>
          <img src="img/plus.svg" alt="plus" />
        </div>
      )}
      {isAddSkillActive && (
        <div className={styles.customInput}>
          <input
            value={skill}
            onChange={skillValue}
            onKeyDown={addSkill}
            ref={inputRef}
          />
        </div>
      )}
    </div>
  );
};

export default SkillList;
