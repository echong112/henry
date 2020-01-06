import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from './Index';
import Product from './Product';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/item" component={Product} />
      </Switch>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/item">Product</Link>
      </div>
    </Router>
  );
}

export default App;
