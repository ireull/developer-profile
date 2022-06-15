import React from "react";

import styles from "./MoreInfo.module.scss";

import { DeveloperData } from "../../data/data.ts";
import MoreInfoList from "../MoreInfoList/MoreInfoList";

const MoreInfo = () => {
  const { availability, environment } = DeveloperData;
  return (
    <div className={styles.moreInfo}>
      <div className={styles.availability}>
        <h2>Availability</h2>
        <span>{availability}</span>
      </div>
      <div className={styles.prefEnvi}>
        <h2>Preferred Environment</h2>
        <MoreInfoList environment={environment} />
      </div>
    </div>
  );
};

export default MoreInfo;
