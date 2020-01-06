import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Screen from '../routes';
import Controls from './controls/Controls';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <div className="ipod">
          <Screen />
          <Controls />
        </div>
      </Router>
    </div>
  );
}

export default App;
