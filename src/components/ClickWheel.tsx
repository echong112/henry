import React from 'react';
import { useDispatch } from 'react-redux';
import { scrollUp, scrollDown } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const handleScroll = (event: any) => {
    dispatch(event.nativeEvent.wheelDelta > 0 ? scrollUp() : scrollDown());
  };
  
  return (
    <div className="wheel"
      onWheel={handleScroll}>
    </div>
  );
};

export default Wheel;
