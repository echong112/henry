import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { jobs } from './_routes';
import { resetScroll, setTitle } from '../actions';

const Job: React.FC = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const [index, setIndex] = useState(0);

  let thisPage: any;
  let { exp } = useParams();
  let filtered = jobs.filter((item, i) => item.slug === exp)[0];

  useEffect(() => {
    dispatch(setTitle(filtered.title));
  }, [dispatch, filtered]);

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
      <div className="page-container">
        <h3>{filtered.jobTitle}</h3>
        <p>{filtered.title}</p>
        <ul>
          {filtered.tasks.map((task, j) => <li className="smaller-p" key={j}>{task}</li>)}
        </ul>
        <br />
        {filtered.summary && (<p className="smaller-p">{filtered.summary}</p>)}
      </div>
    </div>
  );
}

export default Job;
