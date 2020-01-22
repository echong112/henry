import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { portfolio } from './_routes';
import { setTitle } from '../actions';

const Work: React.FC = () => {
  const dispatch = useDispatch();
  let { work } = useParams();
  let filtered = portfolio.filter((item, i) => item.slug === work)[0];
  useEffect(() => {
    dispatch(setTitle(filtered.title));
  }, [dispatch, filtered]);
  return (
    <div className="page">
      <div className="page-container">
        <h3>{filtered.title}</h3>
        <p className="smaller-p">{filtered.tech}</p>
        <p className="smaller-p">{filtered.url}</p>
      </div>
    </div>
  )
}

export default Work;