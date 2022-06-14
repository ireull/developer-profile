import React, { useState, useRef, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";

import styles from "./ExpContent.module.scss";

const ExpContent = ({ name, exp }) => {
  const { skills, setSkills } = useContext(UserContext);
  const [newExp, setNewExp] = useState(exp);
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

  const updateSkills = skills.map((item) => {
    if (item.name === name) {
      return { ...item, ["exp"]: Number(newExp) };
    }
    return item;
  });

  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
    if (!isInputActive) {
      setSkills([...updateSkills]);
    }
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
                value={newExp}
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
