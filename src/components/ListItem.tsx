import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link, } from "react-router-dom";

interface Props {
  title: string;
  slug: string;
}

const MenuItem: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to={`/${'experience'}/${props.slug}`}>{props.title}</Link>
    </div>
  );
}

export default MenuItem;
