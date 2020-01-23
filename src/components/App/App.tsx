import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Player from '../Player';
import Screen from '../Screen';
import './App.scss';

const App: React.FC = () => {
  const [modal, setModal] = useState(true);
  return (
    <Router>
      <div className="ipod">
        {modal === true && (
          <div className="instructions">
            <p>If you have a trackpad, please use the keys for the best experience</p>
            <p>Up: <span>↑ Up Arrow </span></p>
            <p>Down: <span>↓ Down Arrow</span></p>
            <p>Select Item: <span>→ Right Arrow</span></p>
            <p>Back: <span>← Left Arrow</span></p>
            <p>Play Media: Space Bar</p>
            <div className="close-button" onClick={() => setModal(false)}>Close [X]</div>
          </div>
        )}
        <Screen />
        <Controls />
        <Player />
      </div>
    </Router>
  );
};

export default App;
// Arrow symbols ← ↑ → ↓