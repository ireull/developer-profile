import React from "react";

import Input from "../../ui/Input/Input";

import styles from "./ExpContent.module.scss";

const ExpContent = ({ name, exp }) => {
  return (
    <li className={styles.experienceYears}>
      <div>
        <span className={styles.textWrap}>
          {name} <Input value={exp + " years"} />
        </span>
      </div>
    </li>
  );
};

export default ExpContent;
