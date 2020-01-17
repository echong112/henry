import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTrack, stopMedia, playMedia } from '../actions';
import { playlist } from '../routes/_routes';

const useAudio = () => {
  const winLoc = window.location.origin;

  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const mp3 = `${winLoc}/audio/${playlist[activeIndex].slug}.mp3`;

  const [music, setMusic] = useState(`${winLoc}/audio/${playlist[activeIndex].slug}.mp3`);

  const [audio, setAudio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);

  const isPlaying = useSelector((state: any) => state.isPlaying);
  const track = useSelector((state: any) => state.track);

  // listen for changes in track
  useEffect(() => {
    if (track !== 0) {
      if (track > 0) {
        if (activeIndex + 1 > playlist.length - 1) {
          setActiveIndex(0);
        } else {
          setActiveIndex(activeIndex + 1);
        }
      } else {
        if (activeIndex - 1 >= 0) {
          setActiveIndex(activeIndex - 1);
        } else {
          setActiveIndex(playlist.length - 1);
        }
      }
      dispatch(stopMedia());
    }
  }, [track]);

  useEffect(() => {
    setPlaying(isPlaying);
  }, [isPlaying])

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  return [playing];
};

const Player = () => {
  const [playing, toggle] = useAudio();
  return <div></div>;
};

export default Player;