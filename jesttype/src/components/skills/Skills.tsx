import React, { useEffect, useState } from "react";
import { SProps } from "./Skills.types";
const Skills = (props: SProps) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { skills } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 2000);
  });

  return (
    <div>
      {loggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </div>
  );
};

export default Skills;
