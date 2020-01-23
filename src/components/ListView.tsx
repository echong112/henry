import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from "react-router-dom";
import { resetScroll, setPlace, playMedia, unClick, savePlace } from '../actions';
import ListItem from './ListItem';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  list: any[];
  parent?: string;
};

const ListView: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const activeIndex = useSelector((state: any) => state.activeIndex);
  const savedIndexes = useSelector((state: any) => state.savedIndexes);
  const isBack = useSelector((state: any) => state.isBack);
  const clicked = useSelector((state: any) => state.clicked);
  const onVisibilityChange = (isVisible: boolean) => setVisible(isVisible);

  // Saves index for parent menu active item on list item click
  useEffect(() => {
    if (clicked && visible) {
      let parent = props.list[index].parent;
      let slug = props.list[index].slug;
      let link = parent ? `${parent}/${slug}` : slug;
      if (slug === 'player') {
        dispatch(playMedia());
      } else {
        history.push(link);
        dispatch(savePlace(index));
      }
    }
    dispatch(unClick());
  }, [clicked, dispatch, history, index, props, visible])
  /* ######################################################################### */

  // listens for click wheel scroll
  useEffect(() => {
    let current = index;
    if (activeIndex > 0 && index > 0) {
      --current;
    } else if (activeIndex < 0 && current + 1 < props.list.length - 1) {
      ++current;
    }
    setIndex(current);
    dispatch(resetScroll());
  }, [activeIndex, dispatch, props, index]);
  /* ######################################################################### */

  // checks for isBack navigation state for router animation direction
  useEffect(() => {
    if (savedIndexes.length > 0 && isBack) {
      let temp = savedIndexes[savedIndexes.length-1];
      setIndex(temp);
      dispatch(setPlace());
    }
  }, [isBack, dispatch, savedIndexes]);
  /* ######################################################################### */

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
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
    </VisibilitySensor>

  );
}
ListView.defaultProps = {
  list: []
};
export default ListView;
