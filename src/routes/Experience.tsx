import React from 'react';
import ListView from '../components/ListView';
import { jobs } from './_routes';

const Index: React.FC = () => {
  return (
    <div className="page">
      <ListView list={jobs} />
    </div>
  )
}

export default Index;
