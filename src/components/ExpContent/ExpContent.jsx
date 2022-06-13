import React, { useState, useRef, useEffect, useContext } from "react";
import Context from "../../context/context";
import Incorrect from "../InputInfo/Incorrect/Incorrect";

import styles from "./ExpContent.module.scss";

const ExpContent = ({ name, exp }) => {
  const { skills, setSkills } = useContext(Context);
  const [newExp, setNewExp] = useState(exp);
  const [newExpErr, setNewExpErr] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = () => {
    setIsInputActive(false);
  };

  const changeExp = (e) => {
    if (Number(e.target.value > 0)) {
      setNewExp(Number(e.target.value));
    }
    return;
  };

  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
    const updateSkills = skills.map((item) => {
      if (item.name === name) {
        return { ...item, ["exp"]: Number(newExp) };
      }
      return item;
    });
    setSkills([...updateSkills]);
  }, [isInputActive, newExp]);

  return (
    <li className={styles.experienceYears}>
      <div>
        <span className={styles.textWrap}>
          {name}
          <div
            className={styles.inputWrap}
            onClick={() => setIsInputActive(true)}
          >
            {isInputActive ? (
              <input
                className={styles.customInput}
                ref={inputRef}
                type="number"
                onBlur={handleBlur}
                onChange={changeExp}
              />
            ) : (
              <span className={styles.expInfo}>{newExp} years</span>
            )}
          </div>
        </span>
      </div>
    </li>
  );
};

export default ExpContent;
