import React from 'react';
import ListView from '../components/ListView';
import { experienceList } from './routes';

const Index: React.FC = () => {
  return <ListView list={experienceList} />
}

export default Index;
