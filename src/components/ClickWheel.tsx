import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clickMenuButton,
  clickWheel,
  scrolled,
  toggleMedia,
  unsetIsBack,
  setTrack,
} from '../actions';
import nextButton from '../assets/img/next.png';
import prevButton from '../assets/img/prev.png';
import playButton from '../assets/img/play.png';
import clickFile from '../assets/audio/ipodclick.mp3';

const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const clickSound = new Audio(clickFile);
  const isPlaying = useSelector((state: any) => state.isPlaying);

  const handleNextTrack = () => dispatch(setTrack(1));
  const handlePrevTrack = () => dispatch(setTrack(-1));

  /* ######################################################################### */
  // User Action Handlers
  const menuClicked = useCallback(() => {
    clickSound.play();
    dispatch(clickMenuButton());
  }, [dispatch, clickSound]);

  const handlePlayButton = useCallback(() => {
    clickSound.play();
    dispatch(toggleMedia(isPlaying));
  }, [clickSound, dispatch, isPlaying]);

  const handleWheelClick = useCallback(() => {
    clickSound.play();
    dispatch(unsetIsBack());
    dispatch(clickWheel());
  }, [clickSound, dispatch]);

  const handleScroll = useCallback((e: any) => {
    clickSound.play();
    dispatch(scrolled(e.nativeEvent.wheelDelta));
  }, [clickSound, dispatch]);
  /* ######################################################################### */

  // User Action Handlers for keyboard
  const upKey = useCallback((event: any) => {
    if (event.keyCode === 38) handleScroll({nativeEvent: { wheelDelta: 1}}); // up
    if (event.keyCode === 40) handleScroll({nativeEvent: { wheelDelta: -1}}); // down
    if (event.keyCode === 37) menuClicked(); // left
    if (event.keyCode === 39) handleWheelClick(); // right
  }, [handleScroll, handleWheelClick, menuClicked]);
  /* ######################################################################### */

  // DOM listeners and cleanup
  useEffect(() => {
    document.addEventListener("keydown", upKey, false);
    return () => {
      document.removeEventListener("keydown", upKey, false);
    };
  }, [upKey]);
  /* ######################################################################### */
  
  return (
    <div className="controls">
      <div className="wheel" onWheel={handleScroll}>
        <div className="clicker" onClick={handleWheelClick}></div>
        <div className='clicker-buttons'>
          <div className="square">
            <div className="row">
              <div onClick={menuClicked}><span>Menu</span></div>
              <div onClick={handleNextTrack}><span className="next"><img alt="next" src={nextButton} /></span></div>
            </div>
            <div className="row">
              <div onClick={handlePrevTrack}><span className="prev"><img alt="prev" src={prevButton} /></span></div>
              <div onClick={handlePlayButton} ><span className="play"><img alt="play" src={playButton} /></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
