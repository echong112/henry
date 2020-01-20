import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory} from "react-router-dom";
import { resetScroll, setPlace, playMedia, unClick, savePlace } from '../actions';
import ListItem from './ListItem';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const [url, setUrl] = useState('/');
  const dispatch = useDispatch();
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const savedIndexes = useSelector((state: any) => state.savedIndexes);
  const isBack = useSelector((state: any) => state.isBack);
  const clicked = useSelector((state: any) => state.clicked);

  useEffect(() => {
    if (clicked) {
      let parent = props.list[index].parent;
      let slug = props.list[index].slug;
      let link = parent ? `${parent}/${slug}` : slug;
  
      setUrl(`/${link}`);
  
      dispatch(unClick());
      dispatch(savePlace(index));
      if (slug === 'player') {
        dispatch(playMedia());
      } else {
        history.push(link);
      }
    }
  }, [clicked])

  useEffect(() => {
    let current = index;
    if (activeIndex > 0 && index > 0) {
      --current;
    } else if (activeIndex < 0 && current + 1 < props.list.length) {
      ++current;
    }
    setIndex(current);
    dispatch(resetScroll());
  }, [activeIndex, dispatch, props, index]);

  useEffect(() => {
    if (savedIndexes.length > 0 && isBack) {
      let temp = savedIndexes[savedIndexes.length-1];
      setIndex(temp);
      dispatch(setPlace());
    }
  }, [isBack, dispatch, savedIndexes]);

  return (
    <div>
      {props.list && props.list.map((item, k) => (
        <ListItem
          key={k}
          currItem={item}
          itemKey={k}
          isActive={k === index}
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
