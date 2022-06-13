import React from "react";

import { YMaps, Map } from "react-yandex-maps";

import styles from "./YMap.module.scss";

const YMap = () => {
  return (
    <div className={styles.map}>
      <YMaps>
        <div>
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </YMaps>
    </div>
  );
};

export default YMap;
