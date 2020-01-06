import React from 'react';
import ListItem from './ListItem';

interface Props {
  list: any[];
}

const ListView: React.FC<Props> = (props) => {
  return (
    <ListItem title="test" slug="test-slug" />
  );
}

export default ListView;