import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { skills } from './_routes';

const Skills: React.FC = () => {
  const activeIndex = useSelector((state: any) => state.activeIndex);
  let thisPage: any;
  useEffect(() => {
    if (activeIndex && thisPage) {
      console.log(window);
      thisPage.scrollTo(activeIndex, activeIndex * 10)
      console.log(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="page" ref={myPage => thisPage = myPage}>
      <h3>Skills</h3>
      {skills && skills.map((skill, i) => (
        <div key={i}>
          <h4>{skill.title}</h4>
          {skill.skills.map((item, j) => <p key={j}>{item}</p>)}
        </div>
          )
      )}
      <p></p>
    </div>
  )
}

export default Skills;
