import React, { useContext } from "react";
import Context from "../../context/context";
import ExpContent from "../ExpContent/ExpContent";

const ExpList = () => {
  const { skillsSort, setSkills } = useContext(Context);

  return (
    <>
      {skillsSort.map((skill) => (
        <ExpContent key={skill.name} name={skill.name} exp={skill.exp} />
      ))}
    </>
  );
};

export default ExpList;
