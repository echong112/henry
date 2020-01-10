import React from 'react';
import ListView from '../components/ListView';
import { mainList } from './_routes';

const Index: React.FC = () => {
  return (
    <div className="page">
      <ListView list={mainList} />
    </div>
  )
}

export default Index;
