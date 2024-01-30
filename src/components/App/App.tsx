import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Player from '../Player';
import Screen from '../Screen';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="mobile">
        <div>
          <p>Best Viewed on Desktop</p>
          <p>
            <a href="https://www.linkedin.com/in/enrique-chong-538669101/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
      <div className="ipod">
        <Screen />
        <Controls />
        <Player />
      </div>
      <div className="instructions">
        <p>Scroll over Wheel or use the keys to scroll</p>
        <p><strong>Up:</strong> <span>↑ Up Arrow </span></p>
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