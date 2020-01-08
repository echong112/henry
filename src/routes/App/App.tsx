import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Home from '../Home';
import Experience from '../Experience';
import Education from '../Education';
import Portfolio from '../Portfolio';
import Skills from '../Skills';
import Controls from '../../components/ClickWheel';
import './App.scss';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Provider store={store}>
          <div className="ipod">
            <div className="bezel">
              <div className="screen">
                <Route render={({location}) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={4000}
                      classNames="slide"
                    >
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
            <Controls />
          </div>
        </Provider>
      </Router>
    </div>
  );
};

export default App;
