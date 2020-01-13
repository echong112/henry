import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../actions';
import ListView from '../components/ListView';
import { mainList } from './_routes';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('iPod'));
  }, [dispatch])
  return (
    <div className="page">
      <ListView list={mainList} />
    </div>
  )
}

export default Index;
