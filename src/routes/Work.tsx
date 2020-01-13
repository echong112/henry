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
      <h1>{filtered.title}</h1>
      <p>{filtered.tech}</p>
      <p>{filtered.url}</p>
    </div>
  )
}

export default Work;