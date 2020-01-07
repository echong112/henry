import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import Home from '../Home';
import Experience from '../Experience';
import Education from '../Education';
import Portfolio from '../Portfolio';
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
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/experience/:slug" component={Experience} />
                  <Route path="/experience/" component={Experience} />
                  <Route path="/education/:slug" component={Education} />
                  <Route path="/education" component={Education} />
                  <Route path="/portfolio/:slug" component={Portfolio} />
                  <Route path="/portfolio" component={Portfolio} />
                </Switch>
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
