import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../actions';
import { playlist } from '../routes/_routes';

const NowPlaying: React.FC = () => {
  const winLoc = window.location.origin;
  const dispatch = useDispatch();
  const isPlaying = useSelector((state: any) => state.isPlaying);
  const activeTrack = useSelector((state: any) => state.activeTrack);
  useEffect(() => {
    dispatch(setTitle('Now Playing'));
  }, [dispatch]);

  useEffect(() => {
    console.log(activeTrack);
  }, [activeTrack]);

  return (
    <div className="page no-scroll">
      <div className="artwork">
        <div className="artwork-image">
          <img src={`${winLoc}/audio/${playlist[activeTrack].slug}.jpg`} />
        </div>
        <div className="meta">Data</div>
      </div>
      <div className="progress">
        PRogress
      </div>
    </div>
  );
}

export default NowPlaying;