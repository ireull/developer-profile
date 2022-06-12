import React, { useContext } from "react";
import Context from "../../context/context";
import ExpContent from "../ExpContent/ExpContent";

const ExpList = () => {
  const { skills, setSkills } = useContext(Context);

  return (
    <>
      {skills.map((skill) => (
        <ExpContent key={skill.name} name={skill.name} exp={skill.exp} />
      ))}
    </>
  );
};

export default ExpList;
