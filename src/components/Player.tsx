import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { activeTrack, resetTrack, stopMedia, playMedia, setProgress } from '../actions';
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
      dispatch(activeTrack(Math.abs(newIndex)))
      dispatch(playMedia());
    }
    dispatch(resetTrack());
  }, [track, activeIndex, audio, dispatch, winLoc]);

  useEffect(() => {
    let progress = setInterval(() => {
      if (isPlaying) {
        dispatch(setProgress(audio.currentTime / audio.duration));
      }
    }, 1000);
    return () => {
      clearInterval(progress);
    }
  }, [isPlaying])

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();

  }, [isPlaying, audio]);

  return <></>
};

export default Player;