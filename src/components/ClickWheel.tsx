import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clickMenuButton, clickWheel, scrolled } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const menuClicked = () => dispatch(clickMenuButton())
  const handleWheelClick = () => dispatch(clickWheel());
  const handleScroll = (e: any) => dispatch(scrolled(e.nativeEvent.wheelDelta));

  const keyboardFunction = useCallback((event: any) => {
    switch(event.keyCode) {
      case 38 : handleScroll({nativeEvent: { wheelDelta: 1}}); break;// up = scroll up
      case 40 : handleScroll({nativeEvent: { wheelDelta: -1}}); break;// down = scroll down
      case 37 : menuClicked(); break;// left = menu
      case 39 : handleWheelClick(); break; // right = click
    }
  }, []);
  
  useEffect(() => {
    document.addEventListener("keydown", keyboardFunction, false);
    return () => {
      document.removeEventListener("keydown", keyboardFunction, false);
    };
  }, []);

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
