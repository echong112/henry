import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { jobs } from './_routes';

const Job: React.FC = () => {
  let { exp } = useParams();
  let filtered = jobs.filter((item, i) => item.slug === exp)[0];

  return (
    <div className="page">
      <p>{filtered.jobTitle}</p>
      <p>{filtered.title}</p>
      <ul>
        {filtered.tasks.map((task, j) => <li key={j}>{task}</li>)}
      </ul>
      {filtered.summary && (<p>{filtered.summary}</p>)}
    </div>
  )
}

export default Job;
