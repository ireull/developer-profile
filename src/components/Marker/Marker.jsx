import React from "react";

import styles from "./Marker.module.scss";

const Marker = ({ text }) => {
  return (
    <div className={styles.marker}>
      <div className={styles.center}>{text}</div>
    </div>
  );
};

export default Marker;
