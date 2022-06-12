import React from "react";

import styles from "./Incorrect.module.scss";

const Incorrect = () => {
  return (
    <div className={styles.incorrect}>
      <div className={styles.incorrectIcon} />
      <div className={styles.errorText}>Error Description </div>
    </div>
  );
};

export default Incorrect;
