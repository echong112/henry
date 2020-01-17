import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import lady from '../assets/audio/lady.mp3';
import drummer from '../assets/audio/lady.mp3';
import rem from '../assets/audio/rem.mp3';
import { playlist } from '../routes/_routes';

const useAudio = (url: string) => {
  console.log(playlist);

  const [activeIndex, setActiveIndex] = useState(0);
  let newUrl: string = `${playlist[activeIndex].slug}.mp3`;
  const mp3 = `${window.location.origin}/audio/${newUrl}`;
  console.log(mp3);
  const [audio] = useState(new Audio(mp3));
  const [playing, setPlaying] = useState(false);
  const isPlaying = useSelector((state: any) => state.isPlaying);

  const track = useSelector((state: any) => state.track);
  useEffect(() => {
    console.log(track);
  }, [track])
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