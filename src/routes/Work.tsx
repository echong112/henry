import React from 'react';
import { useParams } from "react-router-dom";
import { portfolio } from './_routes';

const Work: React.FC = () => {
  let { work } = useParams();
  let filtered = portfolio.filter((item, i) => item.slug === work)[0];

  return (
    <div className="page">
      <h1>{filtered.title}</h1>
      <p>{filtered.tech}</p>
      <p>{filtered.url}</p>
    </div>
  )
}

export default Work;