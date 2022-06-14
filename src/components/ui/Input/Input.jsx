import React from "react";
import { Correct } from "../../InputInfo/Correct/Correct";
import Incorrect from "../../InputInfo/Incorrect/Incorrect";

import styles from "./Input.module.scss";

const Input = ({ value, handleChangeName, approve, decline }) => {
  return (
    <div className={styles.wrap}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChangeName(e.target.value)}
        className={decline ? styles.incorrectInput : styles.customInput}
      />
      {approve && <Correct />}
      {decline && <Incorrect />}
    </div>
  );
};

export default Input;
