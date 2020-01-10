import React from 'react';
import ListView from '../components/ListView';
import { experienceList } from './_routes';

const Index: React.FC = () => (
  <div className="page">
    <ListView list={experienceList} />
  </div>
)

export default Index;
