import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clickMenuButton, clickWheel, scrolled, unsetIsBack } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const menuClicked = useCallback(() => {
    dispatch(clickMenuButton());
  }, [dispatch]);

  const handleWheelClick = useCallback(() => {
    dispatch(unsetIsBack());
    dispatch(clickWheel());
  }, [dispatch]);

  const handleScroll = useCallback((e: any) => {
    dispatch(scrolled(e.nativeEvent.wheelDelta));
  }, [dispatch]);

  const upKey = useCallback((event: any) => {
    if (event.keyCode === 38) handleScroll({nativeEvent: { wheelDelta: 1}}); // up
    if (event.keyCode === 40) handleScroll({nativeEvent: { wheelDelta: -1}}); // down
    if (event.keyCode === 37) menuClicked(); // left
    if (event.keyCode === 39) handleWheelClick(); // right
  }, [handleScroll, handleWheelClick, menuClicked]);
  
  useEffect(() => {
    document.addEventListener("keydown", upKey, false);
    return () => {
      document.removeEventListener("keydown", upKey, false);
    };
  }, [upKey]);

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
