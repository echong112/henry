import React from 'react';
import ListView from '../components/ListView';
const mainList = [
  {
    title: 'Experience',
    slug: 'experience',
  },
  {
    title: 'Education',
    slug: 'education',
  },
  {
    title: 'Skills',
    slug: 'skills',
  },
  {
    title: 'Portfolio',
    slug: 'portfolio',
  },
  {
    title: 'Extras',
    slug: 'extras',
  }
];


const Index: React.FC = () => {
  return (
    <div className="page">
      <ListView list={mainList} />
    </div>
  )
}

export default Index;
