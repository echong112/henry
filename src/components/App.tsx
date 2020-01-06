import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from './Index';
import Product from './Product';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="ipod">
        <Router>
          <div className="screen">
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/item/:route" component={Product} />
            </Switch>
          </div>
          <div className="controls">
            <Link to="/">Home</Link>
            <Link to="/item">Product</Link>
            <Link to="/item">Product</Link>
            <Link to="/item">Product</Link>
          </div>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
