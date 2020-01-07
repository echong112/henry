import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const activeIndex = useSelector((state: any) => {
    let active = state.activeIndex;
    if (state.activeIndex <= 0) {
      active = 0;
    } else if (state.activeIndex > props.list.length - 1) {
      state.activeIndex = props.list.length - 1;
    }
    return active;
  });
  
  return (
    <div>
      {props.list && props.list.map((item, k) => (
        <ListItem
          key={k}
          isActive={k === activeIndex}
          title={item.title}
          slug={item.slug}
        />
      ))}
    </div>
  );
}

ListView.defaultProps = {
  list: []
};

export default ListView;