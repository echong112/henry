import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { resetTrack, stopMedia, playMedia } from '../actions';
import { playlist } from '../routes/_routes';

const Player = () => {
  const dispatch = useDispatch();
  const winLoc = window.location.origin;
  const [activeIndex, setActiveIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio(`${winLoc}/audio/${playlist[Math.abs(0)].slug}.mp3`));
  const isPlaying = useSelector((state: any) => state.isPlaying);
  const track = useSelector((state: any) => state.track);

  useEffect(() => {
    if (track !== 0) {
      let newIndex = (activeIndex + track) % (playlist.length - 1);
      setActiveIndex(newIndex);
      dispatch(stopMedia());
      setAudio(new Audio(`${winLoc}/audio/${playlist[Math.abs(newIndex)].slug}.mp3`));
      audio.load();
      dispatch(playMedia());
    }
    dispatch(resetTrack());
  }, [track, activeIndex, audio, dispatch, winLoc]);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  return <></>
};

export default Player;