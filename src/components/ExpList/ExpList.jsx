import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

import ExpContent from "../ExpContent/ExpContent";

const ExpList = () => {
  const { skillsSort, setSkills } = useContext(UserContext);

  return (
    <>
      {skillsSort.map((skill) => (
        <ExpContent key={skill.name} name={skill.name} exp={skill.exp} />
      ))}
    </>
  );
};

export default ExpList;
