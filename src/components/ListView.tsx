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
  const clicked = useSelector((state: any) => state.clicked);
  const dispatch = useDispatch();

  useEffect(() => {
    let max = props.list.length;
    (activeIndex >= max) ? dispatch(setMax(max)) : setIndex(activeIndex);
    // go to next
    // reset clciked in the actions / state

    console.log(props.list[activeIndex]);

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
