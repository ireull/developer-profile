import React, { useContext } from "react";
import User from "../User/User";
import Pdf from "react-to-pdf";

import styles from "./Header.module.scss";
import UserContext from "../../context/UserContext";

const Header = () => {
  const { pdfRef } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <User />
        <Pdf targetRef={pdfRef} filename="user.pdf">
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
{
  /* <img src="img/print.svg" alt="" className={styles.printIcon} /> */
}
