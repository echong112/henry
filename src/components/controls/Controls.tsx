import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Wheel from './Wheel';

const Controls: React.FC = () => {
  return (
    <div className="controls">
    <div className="buttons">
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/education/asdf">Asdf</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/experience/wtf">WTF</Link>
    </div>
    <Wheel />
  </div>
  )
}

export default Controls;