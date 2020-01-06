import React from 'react';
import Index from './components/Index';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Cookie from './components/Cookie';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <div className="bezel">
      <div className="screen">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/experience/:slug" component={Cookie} />
          <Route path="/experience/" component={Experience} />
          <Route path="/education/:slug" component={Cookie} />
          <Route path="/education" component={Education} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:slug" component={Portfolio} />
        </Switch>
      </div>
    </div>
  )
}

export default Routes;