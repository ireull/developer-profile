import React from "react";
import Experience from "../Experience/Experience";
import MoreInfo from "../MoreInfo/MoreInfo";
import Portfolio from "../Portfolio/Portfolio";
import SampleCode from "../SampleCode/SampleCode";

import styles from "./Main.module.scss";
import Map from "../Map/Map";
import { DeveloperData } from "../../data/data.ts";
import QuoteList from "../QuoteList/QuoteList";

const Main = () => {
  const { favoriteQuotes } = DeveloperData;
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
          <QuoteList favoriteQuotes={favoriteQuotes} />
        </div>
        <Map />
      </section>
    </main>
  );
};

export default Main;
