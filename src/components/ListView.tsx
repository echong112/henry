import React from 'react';
import ListItem from './ListItem';

interface Props {
  list: any[];
  parent: string;
}

const ListView: React.FC<Props> = (props) => (
  <div>
    {props.list && props.list.map((item, k) => (
      <ListItem key={k} title={item.title} slug={item.slug} />
    ))}
  </div>
);

export default ListView;