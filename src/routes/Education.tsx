import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../actions';

const Education: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Education'));
  }, [])
  return (
    <div className="page">
      <h3>Education</h3>
      <p>Rutgers University, New Brunswick</p>
      <p>Major: Applied Economics</p>
    </div>
  )
}

export default Education;