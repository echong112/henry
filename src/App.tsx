import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/Home';
import rootReducer from './reducers'
import Portfolio from './routes/Portfolio';
import Controls from './components/Controls';

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
                  <Route path="/experience/:slug" component={Portfolio} />
                  <Route path="/experience/" component={Portfolio} />
                  <Route path="/education/:slug" component={Portfolio} />
                  <Route path="/education" component={Portfolio} />
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
