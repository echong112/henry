import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { skills } from './_routes';
import { scrolled } from '../actions';

const Skills: React.FC = () => {
  const dispatch = useDispatch();
  const [savedIndex, setSavedIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  let thisPage: any;
  useEffect(() => {
    if (!savedIndex && activeIndex) setSavedIndex(activeIndex);
    
    if (activeIndex && thisPage) thisPage.scrollTo(activeIndex, activeIndex * 10);

  }, [activeIndex]);

  return (
    <div className="page" ref={myPage => thisPage = myPage}>
      <div className="skills">
        {skills && skills.map((skill, i) => (
          <div className="skill-group" key={i}>
            <h4>{skill.title}</h4>
            {skill.skills.map((item, j) => <p key={j}>{item}</p>)}
          </div>
        ))}
      </div>
      <p></p>
    </div>
  )
}

export default Skills;
