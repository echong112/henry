import React from 'react';
import MenuItem from './controls/MenuItem';

const ListView: React.FC = () => {
  return (
    <ul>
      <li><MenuItem title="test" slug="slug-test" /></li>
    </ul>
  );
}

export default ListView;