import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './routes/Index';
import Experience from './routes/Experience';
import Education from './routes/Education';
import Portfolio from './routes/Portfolio';

import Wheel from './components/ClickWheel';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <div className="ipod">
          <div className="bezel">
            <div className="screen">
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/experience/:slug" component={Portfolio} />
                <Route path="/experience/" component={Experience} />
                <Route path="/education/:slug" component={Portfolio} />
                <Route path="/education" component={Education} />
                <Route path="/portfolio/:slug" component={Portfolio} />
                <Route path="/portfolio" component={Portfolio} />
              </Switch>
            </div>
          </div>
          <div className="controls">
            <Wheel />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;