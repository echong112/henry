import React from 'react';
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../routes/Home';
import Experience from '../routes/Experience';
import Education from '../routes/Education';
import Portfolio from '../routes/Portfolio';
import Skills from '../routes/Skills';

const Screen: React.FC = () => (
  <div className="bezel">
    <div className="screen">
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={4000}
          classNames="slide">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/experience/" component={Experience} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </div>
</div>
)

export default Screen;