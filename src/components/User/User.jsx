import React from "react";
import SkillList from "../../components/SkillList/SkillList";
import styles from "./User.module.scss";
const User = () => {
  return (
    <div className={styles.infoWrap}>
      <img src="img/user.png" alt="avatar" className={styles.infoAvatar} />
      <div className={styles.infoList}>
        <ul>
          <li className={styles.name}>John Smith</li>
          <li className={styles.country}>Portland, Oregon, USA</li>
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
