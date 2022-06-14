import React from "react";
import User from "../User/User";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <User />
        <button className={styles.print}>
          <img src="img/print.svg" alt="" className={styles.printIcon} />
          <span className={styles.printText}>Print this page</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
