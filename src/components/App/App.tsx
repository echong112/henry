import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Player from '../Player';
import ScreenRouter from '../../routes/Router';
import StatusBar from '../StatusBar';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="ipod">
        <div className="bezel">
          <div className="screen">
            <StatusBar />
            <div className="screen__overlay"></div>
            <ScreenRouter />
          </div>
        </div>
        <Controls />
        <Player />
      </div>
    </Router>
  );
};

export default App;
