import React, { useContext } from "react";
import User from "../User/User";
import Pdf from "react-to-pdf";

import UserContext from "../../context/UserContext";

import styles from "./Header.module.scss";

const Header = () => {
  const { pdfRef } = useContext(UserContext);

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [10, 15],
  };

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <User />
        <Pdf targetRef={pdfRef} filename="user.pdf" options={options}>
          {({ toPdf }) => (
            <a className={styles.print} onClick={toPdf}>
              <div className={styles.printIcon} />
              <span className={styles.printText}>Print this page</span>
            </a>
          )}
        </Pdf>
      </div>
    </header>
  );
};

export default Header;
