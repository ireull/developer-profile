import React, { useState } from "react";
import SkillList from "../../components/SkillList/SkillList";
import Input from "../../ui/Input/Input";
import styles from "./User.module.scss";

const User = () => {
  const [name, setName] = useState("John Smith");
  const [country, setCountry] = useState("Portland, Oregon, USA");

  const handleChangeName = (e) => {
    setName(e);
  };
  const handleChangeCountry = (e) => {
    setCountry(e);
  };
  return (
    <div className={styles.infoWrap}>
      <div className={styles.infoAvatar}>
        <img src="img/user.png" alt="avatar" />
      </div>
      <div className={styles.infoContainer}>
        <ul className={styles.infoList}>
          <li className={styles.name}>
            <Input value={name} handleChangeName={handleChangeName} />
          </li>
          <li className={styles.country}>
            <Input value={country} handleChangeName={handleChangeCountry} />
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
