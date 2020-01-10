import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../routes/Home';
import Experience from '../routes/Experience';
import Education from '../routes/Education';
import Portfolio from '../routes/Portfolio';
import Skills from '../routes/Skills';
import { unclickMenuButton } from '../actions';

const Screen: React.FC = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state: any) => state.menuClicked);

  useEffect(() => {
    if (activeIndex) {
      dispatch(unclickMenuButton());
    }
  }, [activeIndex, dispatch]);

  return (
    <div className="bezel">
      <div className="screen">
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade">
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/education" component={Education} />
              <Route path="/experience/:exp" component={Skills} />
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
}

export default Screen;