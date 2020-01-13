import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../actions';
import ListView from '../components/ListView';
import { jobs } from './_routes';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Experience'));
  }, [])
  return (
    <div className="page">
      <ListView list={jobs} />
    </div>
  )
}

export default Index;
