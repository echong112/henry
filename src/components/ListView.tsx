import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScroll } from '../actions';
import ListItem from './ListItem';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  let currList: any;

  useEffect(() => {
    let current = index;
    if (activeIndex > 0 && index > 0) {
      --current;
    } else if (activeIndex < 0 && current + 1 < props.list.length) {
      ++current;
    }
    setIndex(current);
    dispatch(resetScroll());
  }, [activeIndex, currList, dispatch, props, index]);

  return (
    <div ref={list => currList = list}>
      {props.list && props.list.map((item, k) => (
        <ListItem
          key={k}
          currItem={item}
          isActive={k === index}
        />
      ))}
    </div>
  );
}
ListView.defaultProps = {
  list: []
};
export default ListView;
