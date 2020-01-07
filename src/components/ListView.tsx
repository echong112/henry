import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { setMax, unClick } from '../actions';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const [index, setIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const clicked = useSelector((state: any) => state.clicked);
  const dispatch = useDispatch();

  useEffect(() => {
    let max = props.list.length;
    if (activeIndex >= max) {
      dispatch(setMax(max));
    } else {
      setIndex(activeIndex);
    }
    if (clicked) {
      console.log(clicked);
      // go to next
      console.log(index);
      // reset clciked in the actions / state
      dispatch(unClick());
    }
    console.log(clicked);
  }, [activeIndex, dispatch, props, clicked]);

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
