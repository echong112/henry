import React from 'react';
import ListItem from './ListItem';

interface Props {
  list: any[];
  parent?: string;
  active?: number;
};

const ListView: React.FC<Props> = (props) => (
  <div>
    {props.list && props.list.map((item, k) => (
      <ListItem
        key={k}
        isActive={k === props.active}
        title={item.title}
        slug={item.slug}
      />
    ))}
  </div>
);

ListView.defaultProps = {
  list: [],
  active: 0
};
export default ListView;