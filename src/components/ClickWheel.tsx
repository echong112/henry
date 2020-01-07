import React from 'react';
import { useDispatch } from 'react-redux';
import { scrollUp, scrollDown } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const handleScroll = (event: any) => {
    dispatch(event.nativeEvent.wheelDelta > 0 ? scrollUp() : scrollDown());
  };
  const handleClick = (event: any) => {
    console.log('diahre');
  }
  return (
    <div className="wheel"
      onClick={handleClick}
      onWheel={handleScroll}>
    </div>
  );
};

export default Wheel;
