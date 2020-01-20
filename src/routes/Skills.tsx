import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, resetScroll } from '../actions';
import { skills } from './_routes';

const Skills: React.FC = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const [index, setIndex] = useState(0);
  let thisPage: any;

  useEffect(() => {
    dispatch(setTitle('Skills'));
  })

  useEffect(() => {
    if (activeIndex && thisPage) {
      if (activeIndex > 0) {
        setIndex(index - 1);
      } else if (activeIndex < 0) {
        setIndex(index + 1);
      }
      thisPage.scrollTo(index, index * 10);
      dispatch(resetScroll());
    }
  }, [activeIndex, index, thisPage, dispatch]);

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
