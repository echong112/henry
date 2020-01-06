import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link, } from "react-router-dom";

interface Props {
  count: number;
  title: string;
  slug: string;
}
const MenuItem: React.FC<Props> = (props) => {
  return (
    <Link to="/experience/wtf">{props.title}</Link>
  )
}

export default MenuItem;
