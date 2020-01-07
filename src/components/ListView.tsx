import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { setMax } from '../actions';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const [index, setIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    let max = props.list.length;
    if (activeIndex >= max) {
      dispatch(setMax(max));
    } else {
      setIndex(activeIndex);
    }
  }, [activeIndex, dispatch, props]);
  
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