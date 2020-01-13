import React from 'react';
import ListView from '../components/ListView';
import { portfolio } from './_routes';

const Portfolio: React.FC = () => {
  return (
  <div className="page">
    <ListView list={portfolio} />
  </div>
  )
}

export default Portfolio;
