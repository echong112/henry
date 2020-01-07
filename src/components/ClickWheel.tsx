import React from 'react';
import { useDispatch } from 'react-redux';
import { clickWheel, scrollUp, scrollDown } from '../actions';
const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const handleScroll = (event: any) => {
    dispatch(event.nativeEvent.wheelDelta > 0 ? scrollUp() : scrollDown());
  };
  const handleClick = (event: any) => {
    dispatch(clickWheel());
  }
  return (
    <div className="controls">
      <div className="wheel"
        onClick={handleClick}
        onWheel={handleScroll}>
      </div>
    </div>
  );
};
export default Wheel;
