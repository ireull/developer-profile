import React from "react";
import Input from "../../ui/Input/Input";

import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <ul className={styles.experienceList}>
        <li className="experienceYears">
          <div>
            <span>
              PHP <Input value="2 years" />
            </span>
          </div>
        </li>
        <li className="experienceYears">
          <div>
            <span>
              Ruby <Input value="4 years" />
            </span>
          </div>
        </li>
        <li className="experienceYears">
          <div>
            <span>
              JavaScript <Input value="6 years" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
