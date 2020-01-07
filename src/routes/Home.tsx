import React from 'react';
import { useSelector } from 'react-redux';
import ListView from '../components/ListView';
import { mainList } from './routes';

const Index: React.FC = () => {
  return <ListView list={mainList} />
}

export default Index;
