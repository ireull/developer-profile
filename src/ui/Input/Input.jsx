import React from "react";
import styles from "./Input.module.scss";

const Input = ({ value, handleChangeName, skillValue, addSkill }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => handleChangeName(e.target.value)}
      className={styles.customInput}
    />
  );
};

export default Input;
