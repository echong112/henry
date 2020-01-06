import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import Controls from './components/Controls';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
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
      </Router>
    </div>
  );
};

export default App;
