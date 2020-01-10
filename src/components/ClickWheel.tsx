import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clickMenuButton, clickWheel, scrolled } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();

  const menuClicked = useCallback(() => {
    dispatch(clickMenuButton());
  }, [dispatch]);

  const handleWheelClick = useCallback(() => {
    dispatch(clickWheel());
  }, [dispatch]);

  const handleScroll = useCallback((e: any) => {
    dispatch(scrolled(e.nativeEvent.wheelDelta));
  }, [dispatch]);

  const upKey = useCallback((event: any) => {
    if (event.keyCode === 38) handleScroll({nativeEvent: { wheelDelta: 1}}); // up
  }, [handleScroll]);

  const downKey = useCallback((event: any) => {
    if (event.keyCode === 40) handleScroll({nativeEvent: { wheelDelta: -1}}); // down
  }, [handleScroll]);

  const leftKey = useCallback((event: any) => {
    if (event.keyCode === 37) menuClicked(); // left
  }, [menuClicked]);

  const rightKey = useCallback((event: any) => {
    if (event.keyCode === 39) handleWheelClick(); // right
  }, [handleWheelClick]);
  
  useEffect(() => {
    document.addEventListener("keydown", upKey, false);
    document.addEventListener("keydown", downKey, false);
    document.addEventListener("keydown", leftKey, false);
    document.addEventListener("keydown", rightKey, false);
    return () => {
      document.removeEventListener("keydown", upKey, false);
      document.removeEventListener("keydown", downKey, false);
      document.removeEventListener("keydown", leftKey, false);
      document.removeEventListener("keydown", rightKey, false);
    };
  }, [upKey, downKey, leftKey, rightKey]);

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
