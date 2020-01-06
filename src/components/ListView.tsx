import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

interface Props {
  list: any[];
  parent?: string;
  activeIndex?: number;
};


const ListView: React.FC<Props> = (props) => {
  const isUp = useSelector((state: any) => {
    console.log(state.isUp);
    if (state.isUp) {
      console.log('isup');
    } else {
      console.log('isDown');
    }
    return state.isUp;
  });
  
  return (
    <div>
      {props.list && props.list.map((item, k) => (
        <ListItem
          key={k}
          isActive={k === props.activeIndex}
          title={item.title}
          slug={item.slug}
        />
      ))}
    </div>
  );
}

ListView.defaultProps = {
  list: [],
  activeIndex: 0
};

export default ListView;