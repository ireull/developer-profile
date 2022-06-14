import React from "react";

import styles from "./MoreInfo.module.scss";

const MoreInfo = () => {
  return (
    <div className={styles.moreInfo}>
      <div className={styles.availability}>
        <h2>Availability</h2>
        <span>Full-time</span>
      </div>
      <div className={styles.prefEnvi}>
        <h2>Preferred Environment</h2>
        <span>GitHub, Mac OSX</span>
      </div>
    </div>
  );
};

export default MoreInfo;
