import React, { useState, useRef, useEffect } from "react";

import Input from "../../ui/Input/Input";

import styles from "./ExpContent.module.scss";

const ExpContent = ({ name, exp }) => {
  const [newExp, setNewExp] = useState(exp);
  const [isClicked, setIsClicked] = useState(false);
  const spanRef = useRef(null);
  
  const changeExp = (e) => {
    const html = e.target.innerHTML;
    setNewExp(html);
  };

  useEffect(() => {
    if (isClicked) {
      spanRef.current.focus();
    }
  }, [isClicked]);

  return (
    <li className={styles.experienceYears}>
      <div>
        <span className={styles.textWrap}>
          {name}
          <div onClick={() => setIsClicked(true)}>
            {!isClicked && <Input value={exp + " years"} />}
            {isClicked && (
              <div
                className={styles.edit}
                onChange={changeExp}
                ref={spanRef}
                contentEditable
              >
                {newExp} years
              </div>
            )}
          </div>
        </span>
      </div>
    </li>
  );
};

export default ExpContent;
