import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../actions';

const Education: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Education'));
  }, [dispatch])
  return (
    <div className="page">
      <div className="page-container">
        <h3>Education</h3>
        <p>Rutgers University, New Brunswick</p>
        <p>Major: Applied Economics</p>
      </div>
    </div>
  )
}

export default Education;