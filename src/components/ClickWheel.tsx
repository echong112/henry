import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOne, goDown } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const handleScroll = (event: any) => {
    dispatch(event.nativeEvent.wheelDelta > 0 ? addOne() : goDown());
  };
  
  useEffect(() => {
    dispatch(addOne());
  })

  return (
    <div className="wheel"
      onWheel={handleScroll}>
    </div>
  );
};

export default Wheel;
