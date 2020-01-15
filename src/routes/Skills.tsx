import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../actions';
import { skills } from './_routes';

const Skills: React.FC = () => {
  const dispatch = useDispatch();
  const [currLocation, setCurrLocation] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  let thisPage: any;

  useEffect(() => {
    dispatch(setTitle('Skills'));

    if (activeIndex && thisPage) {
      thisPage.scrollTo(activeIndex, activeIndex * 10);
    }
  }, [activeIndex, dispatch, thisPage]);

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
  );
}

export default Skills;
