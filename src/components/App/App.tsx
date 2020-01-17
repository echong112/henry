import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Screen from '../Screen';
import Player from '../Player';
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
