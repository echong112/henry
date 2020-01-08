import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Controls from '../ClickWheel';
import Screen from '../Screen';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="ipod">
        <Screen />
        <Controls />
      </div>
    </Router>
  );
};

export default App;
