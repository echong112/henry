import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListView from '../components/ListView';
import { portfolio } from './_routes';
import { setTitle } from '../actions';

const Portfolio: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Portfolio'));
  }, [])
  return (
  <div className="page">
    <ListView list={portfolio} />
  </div>
  )
}

export default Portfolio;
