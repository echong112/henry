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
    </Router>
  );
};

export default App;
