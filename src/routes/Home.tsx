import React from 'react';
import ListView from '../components/ListView';
import { mainList } from './routes';

const Index: React.FC = () => {
  return (
    <div className="">
      <ListView list={mainList} />
    </div>
  )
}

export default Index;
