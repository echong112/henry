import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clickMenuButton, clickWheel, scrolled, unsetIsBack } from '../actions';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const mp3 = `${window.location.href}/ipodclick.mp3`;
  let scrollWheel: any;

  const menuClicked = useCallback(() => {
    const click = new Audio(mp3);
    click.play();
    dispatch(clickMenuButton());
  }, [dispatch, mp3]);

  const handleWheelClick = useCallback(() => {
    const click = new Audio(mp3);
    click.play();
    dispatch(unsetIsBack());
    dispatch(clickWheel());
  }, [dispatch, mp3]);

  const handleScroll = useCallback((e: any) => {
    const click = new Audio(mp3);
    click.play();
    dispatch(scrolled(e.nativeEvent.wheelDelta));
  }, [dispatch, mp3]);

  const upKey = useCallback((event: any) => {
    if (event.keyCode === 38) handleScroll({nativeEvent: { wheelDelta: 1}}); // up
    if (event.keyCode === 40) handleScroll({nativeEvent: { wheelDelta: -1}}); // down
    if (event.keyCode === 37) menuClicked(); // left
    if (event.keyCode === 39) handleWheelClick(); // right
  }, [handleScroll, handleWheelClick, menuClicked]);

  const process_touchstart = (e: any) => {
    console.log(e);
    console.log(e.touches[0].pageX);
  }
  const process_touchend = () => {
    console.log('touch end');
  }
  
  useEffect(() => {
    console.log(scrollWheel);
    // determine clockwise or counter clockwise
    scrollWheel.addEventListener('touchmove', process_touchstart, false);
    scrollWheel.addEventListener('touchend', process_touchend, false);
    document.addEventListener("keydown", upKey, false);
    return () => {
      document.removeEventListener("keydown", upKey, false);
    };
  }, [upKey]);

  return (
    <div className="controls">
      <div className="wheel" ref={input => scrollWheel = input} onWheel={handleScroll}>
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
