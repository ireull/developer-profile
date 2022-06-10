import React from "react";

import styles from "./SampleCode.module.scss";

const SampleCode = () => {
  return (
    <div className={styles.code}>
      <h2>Sample code</h2>
      <div>
        <img src="img/code.png" alt="code" />
      </div>
    </div>
  );
};

export default SampleCode;
