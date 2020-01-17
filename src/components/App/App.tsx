import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Screen from '../Screen';
import './App.scss';

const App: React.FC = () => {
  const mp3 = `${window.location.origin}/ipodclick.mp3`;
  const clickSound = new Audio(mp3);
  clickSound.play();
  return (
    <Router>
      <div className="ipod">
        <Screen />
        <Controls />
        <div className="player">
          <audio controls autoPlay loop>
            <source src="../../assets/audio/ipodclick.mp3"></source>
          </audio>
        </div>
      </div>
    </Router>
  );
};

export default App;
