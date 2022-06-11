import React from "react";
import Experience from "../Experience/Experience";
import MoreInfo from "../MoreInfo/MoreInfo";
import Portfolio from "../Portfolio/Portfolio";
import SampleCode from "../SampleCode/SampleCode";
import Quote from "../Quote/Quote";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.mainTop}>
        <div className={styles.leftWrapper}>
          <Portfolio />
          <Experience />
        </div>
        <div className={styles.rightWrapper}>
          <SampleCode />
          <MoreInfo />
        </div>
      </section>
      <section className={styles.mainBottom}>
        <div className={styles.quotes}>
          <Quote
            title="The Most Amaizing..."
            subtitle="The only true wisdom is in knowing you know nothing..."
          />
          <Quote
            title="In clients I look for..."
            subtitle="There is only one good, knowledge, and one evil, ignorance."
          />
        </div>
        <div className={styles.map}>
          <img src="img/map.png" alt="Map" />
        </div>
      </section>
    </main>
  );
};

export default Main;
