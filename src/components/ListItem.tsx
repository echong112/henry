import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link, } from "react-router-dom";

interface Props {
  title: string;
  slug: string;
}

const MenuItem: React.FC<Props> = (props) => (
  <Link
    className="menu-item"
    to={`/${'experience'}/${props.slug}`}>{props.title}
  </Link>
);

export default MenuItem;
