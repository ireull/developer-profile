import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

import SkillList from "../../components/SkillList/SkillList";
import Avatar from "../Avatar/Avatar";

import { Correct } from "../InputInfo/Correct/Correct";
import Incorrect from "../InputInfo/Incorrect/Incorrect";
import styles from "./User.module.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const User = () => {
  const { setLatitude, setLongitude, setIsFetching } = useContext(UserContext);

  const [name, setName] = useState("John Smith");
  const [validName, setValidName] = useLocalStorage("John Smith", "user-name");
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [address, setAddress] = useState("Portland, Oregon, USA");
  const [validAddress, setValidAddress] = useLocalStorage(
    "Portland, Oregon, USA",
    "user-address"
  );
  const [addressDirty, setAddressDirty] = useState(false);
  const [addressError, setAddressError] = useState(false);

  useEffect(() => {
    updateCoordinates();
  }, []);

  useEffect(() => {
    if (nameDirty) {
      document.title = `${validName} • Developer profile`;
    }
  }, [nameDirty]);

  const updateCoordinates = () => {
    const encodedAddress = encodeURI(address);

    fetch(
      `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${encodedAddress}&language=en`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a85a611b53msh1701a7695c9c5bdp1cf052jsn2c60298ef93a",
          "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then(({ results }) => {
        setIsFetching(false);
        setLatitude(results[0].location.lat);
        setLongitude(results[0].location.lng);
        setIsFetching(true);
      })
      .catch((err) => console.log(err));
  };

  const focusHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "address":
        setAddressDirty(true);
        break;
    }
  };

  /** focus out */

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(false);
        break;
      case "address":
        setAddressDirty(false);
        updateCoordinates();
        break;
    }
  };
  /** Validation */

  const nameHandler = (e) => {
    const validate = /[^A-Za-z 0-9 А-Яа-я]/i;
    setName(String(e.target.value));

    if (!e.target.value || validate.test(e.target.value)) {
      setNameError(true);
    } else {
      setNameError(false);
      setValidName(String(e.target.value));
    }
  };

  const сountryHandler = (e) => {
    const validate = /[^A-Za-z , 0-9 А-Яа-я]/i;
    setAddress(String(e.target.value));

    if (!e.target.value || validate.test(e.target.value)) {
      setAddressError(true);
    } else {
      setAddressError(false);
      setValidAddress(String(e.target.value));
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
                value={nameError ? name : validName}
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
                value={addressError ? address : validAddress}
                type="text"
                name="address"
                className={styles.input}
                onChange={(e) => сountryHandler(e)}
              />
              {addressError && addressDirty && <Incorrect />}
              {!addressError && addressDirty && <Correct />}
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
