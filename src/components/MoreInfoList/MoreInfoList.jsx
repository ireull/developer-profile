import React from "react";

import styles from "./MoreInfoList.module.scss";

const MoreInfoList = ({ environment }) => {
  return (
    <div className={styles.wrapp}>
      {environment.map((item) => (
        <span key={item} className={styles.text}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default MoreInfoList;
