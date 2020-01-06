import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from './Index';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="ipod">
        <Router>
          <div className="bezel">
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/experience" component={Experience} />
              <Route path="/education" component={Education} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
          <div className="controls">
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="wheel"></div>
        </Router>
      </div>
    </div>
  );
}

export default App;
