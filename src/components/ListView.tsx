import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScroll, setPlace } from '../actions';
import ListItem from './ListItem';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const savedIndexes = useSelector((state: any) => state.savedIndexes);
  const backButtonClicked = useSelector((state: any) => state.menuClicked);
  const isBack = useSelector((state: any) => state.isBack);

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

  useEffect(() => {
    if (savedIndexes.length > 0) {
      let temp = savedIndexes[savedIndexes.length-1];
      setIndex(temp);
      dispatch(setPlace());
    }
  }, []);

  return (
    <div ref={list => currList = list}>
      {props.list && props.list.map((item, k) => (
        <ListItem
          key={k}
          currItem={item}
          itemKey={k}
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
