import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from './Index';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Cookie from './Cookie';
import Wheel from './controls/Wheel';

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
              <Route path="/experience/:slug" component={Cookie} />
              <Route path="/experience/" component={Experience} />
              <Route path="/education/:slug" component={Cookie} />
              <Route path="/education" component={Education} />
              <Route path="/portfolio/:slug" component={Portfolio} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </div>
        
        <div className="controls">
          <div className="buttons">
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/education/asdf">Asdf</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/experience/wtf">WTF</Link>
          </div>
          <Wheel />
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
