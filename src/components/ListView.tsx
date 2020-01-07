import React, { useState } from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isUp = useSelector((state: any) => {
    return state.isUp;
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