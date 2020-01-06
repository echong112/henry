import React from 'react';
import ListView from '../components/ListView';
const mainList = [
  {
    title: 'Title 1',
    slug: 'slug-1',
  },
  {
    title: 'Title 2',
    slug: 'slug-2',
  }
]

const Index: React.FC = () => <ListView list={mainList} />

export default Index;
