import React from 'react';
import ListView from '../components/ListView';
import { mainList } from './routes';

const Index: React.FC = () => <ListView list={mainList} parent="index"/>

export default Index;
