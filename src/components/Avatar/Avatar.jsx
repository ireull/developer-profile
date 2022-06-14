import React from "react";

import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <div className={styles.infoAvatar}>
      <div className={styles.grey}>
        <img src="img/user.png" alt="avatar" className={styles.avatar} />
      </div>
    </div>
  );
};

export default Avatar;
