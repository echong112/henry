import React from 'react';
import Index from './components/Index';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Cookie from './components/Cookie';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/experience/:wtf" component={Cookie} />
      <Route path="/experience/" component={Experience} />
      <Route path="/education/:wtf" component={Cookie} />
      <Route path="/education" component={Education} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
  )
}

export default Routes;