import React, { useState } from "react";
import SkillList from "../../components/SkillList/SkillList";
import Avatar from "../Avatar/Avatar";

import { Correct } from "../InputInfo/Correct/Correct";
import Incorrect from "../InputInfo/Incorrect/Incorrect";

import styles from "./User.module.scss";

const User = () => {
  const [name, setName] = useState("John Smith");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [country, setCountry] = useState("USA");
  const [countryDirty, setCountryDirty] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const focusHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "country":
        setCountryDirty(true);
        break;
    }
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(false);
        break;
      case "country":
        setCountryDirty(false);
        break;
    }
  };

  const nameHandler = (e) => {
    const validate = /[^A-Za-z 0-9]/i;
    setName(String(e.target.value));

    if (!e.target.value || validate.test(e.target.value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const сountryHandler = (e) => {
    const validate = /[^A-Za-z 0-9]/i;
    setCountry(String(e.target.value));

    if (!e.target.value || validate.test(e.target.value)) {
      setCountryError(true);
    } else {
      setCountryError(false);
    }
  };

  return (
    <div className={styles.infoWrap}>
      <Avatar />
      <div className={styles.infoContainer}>
        <ul className={styles.infoList}>
          <li className={styles.name}>
            <div className={styles.inputWrap}>
              <input
                onFocus={(e) => focusHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={name}
                type="text"
                name="name"
                className={styles.input}
                onChange={(e) => nameHandler(e)}
              />
              {nameError && nameDirty && <Incorrect />}
              {nameDirty && !nameError && <Correct />}
            </div>
          </li>
          <li className={styles.country}>
            <div className={styles.inputWrap}>
              <input
                onFocus={(e) => focusHandler(e)}
                onBlur={(e) => blurHandler(e)}
                value={country}
                type="text"
                name="country"
                className={styles.input}
                onChange={(e) => сountryHandler(e)}
              />
              {countryError && countryDirty && <Incorrect />}
              {!countryError && countryDirty && <Correct />}
            </div>
          </li>
          <li className={styles.language}>
            <img src="img/flag.png" alt="flag" />
            English
          </li>
        </ul>
        <SkillList />
      </div>
    </div>
  );
};

export default User;
