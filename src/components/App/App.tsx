import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Player from '../Player';
import Screen from '../Screen';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="ipod">
        <Screen />
        <Controls />
        <Player />
      </div>
        <div className="instructions">
          <p>Please use the keys to scroll</p>
          <p>Up: <span>↑ Up Arrow </span></p>
          <p>Down: <span>↓ Down Arrow</span></p>
          <p>Select Item: <span>→ Right Arrow</span></p>
          <p>Back: <span>← Left Arrow</span></p>
          <p>Play Media: Space Bar</p>
        </div>
    </Router>
  );
};

export default App;
// Arrow symbols ← ↑ → ↓