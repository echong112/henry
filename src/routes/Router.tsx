import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Work from './Work';
import Job from './Job';
import Skills from './Skills';
import { unclickMenuButton, setIsBack } from '../actions';

const Screen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const myLoc = useLocation();
  const menuClicked = useSelector((state: any) => state.menuClicked);
  const isBack = useSelector((state: any) => state.isBack);

  useEffect(() => {
    if (menuClicked) {
      dispatch(unclickMenuButton());
      if (myLoc.pathname.length > 1) {
        history.goBack();
        dispatch(setIsBack());
      }
    }
  }, [menuClicked, dispatch, myLoc, history, isBack]);

  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames={isBack ? 'back-fade' : 'fade'}>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/experience/:exp" component={Job} />
            <Route path="/experience/" component={Experience} />
            <Route path="/portfolio/:work" component={Work} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/skills" component={Skills} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default Screen;