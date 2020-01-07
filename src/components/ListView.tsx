import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const [index, setIndex] = useState(0);

  const activeIndex = useSelector((state: any) => state.activeIndex);

  useEffect(() => {
    setIndex(activeIndex);
  }, [index, activeIndex]);
  
  return (
    <div>
      {props.list && props.list.map((item, k) => (
        <ListItem
          key={k}
          isActive={k === index}
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