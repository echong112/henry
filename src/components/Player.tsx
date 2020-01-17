import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import lady from '../assets/audio/lady.mp3';

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const isPlaying = useSelector((state: any) => state.isPlaying);

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
  const [playing, toggle] = useAudio(lady);
  return <div></div>;
};

export default Player;