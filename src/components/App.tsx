import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function Product() {
  return <h2>This is a page for product with ID </h2>;
}

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
