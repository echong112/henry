import React from 'react';
import { skills } from './_routes';

const Skills: React.FC = () => (
  <div className="page">
    <h3>Skills</h3>
    {skills && skills.map((skill, i) => (
      <div>
        <p>{skill.title}</p>
        {skill.skills.map((item, j) => {
          return (
            <p>{item}</p>
          )
        })}
      </div>
        )
    )}
    <p></p>
  </div>
);

export default Skills;
