import React from 'react';
import { useDispatch } from 'react-redux';
import { clickMenuButton, clickWheel, scrolled } from '../actions';

const Wheel: React.FC = () => {
  // Redux Functions
  const dispatch = useDispatch();
  const menuClicked = () => dispatch(clickMenuButton())
  const handleWheelClick = () => dispatch(clickWheel());
  const handleScroll = (e: any) => dispatch(scrolled(e.nativeEvent.wheelDelta));

  return (
    <div className="controls">
      <div className="wheel" onWheel={handleScroll}>
        <div className="clicker" onClick={handleWheelClick}></div>
        <div className='clicker-buttons'>
          <svg viewBox='0 0 100 100'>
            <polygon onClick={menuClicked} points='0,0 50,50 100,0' />
            <polygon points='0,0 50,50 0,100' />
            <polygon points='0,100 50,50 100,100' />
            <polygon points='100,0 50,50 100,100' />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
