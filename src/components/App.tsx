import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HenryRoutes from '../routes';
import Controls from './controls/Controls';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <div className="ipod">

          <div className="bezel">
            <div className="screen">
              <HenryRoutes />
            </div>
          </div>
          
          <Controls />
        </div>
      </Router>
    </div>
  );
}

export default App;
