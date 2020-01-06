import React from 'react';
import ListItem from './ListItem';

interface Props {
  list: any[];
  parent: string;
}

const ListView: React.FC<Props> = (props) => {
  return (
    <div>
      {props.list && props.list.map((item, k) => {
        return <ListItem key={k} title="test" slug="test-slug" />
      })}
    </div>
  );
}

export default ListView;