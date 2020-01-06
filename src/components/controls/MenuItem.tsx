import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link, } from "react-router-dom";

interface Props {
  count: number;
}
const MenuItem: React.FC<Props> = (props) => {
  console.log(props);
  return (
    <Link to="/experience/wtf">{'asdf'}</Link>
  )
}

export default MenuItem;
