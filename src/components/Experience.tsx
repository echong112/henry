import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Experience: React.FC = () => {
  return (
    <div>
      <h3>Experience</h3>
      <Link to="/experience/wtf">WTF</Link>
    </div>
  )
}

export default Experience;