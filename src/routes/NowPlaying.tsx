import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../actions';
import { playlist } from '../routes/_routes';

const NowPlaying: React.FC = () => {
  const winLoc = window.location.origin;
  const dispatch = useDispatch();
  const [trackBar, setTrackBar] = useState(0);
  const isPlaying = useSelector((state: any) => state.isPlaying);
  const activeTrack = useSelector((state: any) => state.activeTrack);
  let current = playlist[activeTrack];

  const progress = useSelector((state: any) => state.progress);
  console.log(progress);

  useEffect(() => {
    dispatch(setTitle('Now Playing'));
  }, [dispatch]);

  useEffect(() => {
    setTrackBar(progress);
  }, [progress]);
  
const pStyle = {
  width: progress * 100,
};

  return (
    <div className="page no-scroll">
      <div className="artwork">
        <div className="artwork-image">
          <img src={`${winLoc}/audio/${current.slug}.jpg`} />
        </div>
        <div className="meta">
          <p>{current.title}</p>
          <p>{current.artist}</p>
          <p>{current.album}</p>
        </div>
      </div>
      <div className="progress-bar">
        <span style={pStyle} className="progress"></span>
      </div>
    </div>
  );
}

export default NowPlaying;