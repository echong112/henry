import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { Link, useHistory} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { playMedia, unClick, savePlace } from '../actions';

interface Props {
  currItem: any;
  itemKey: number;
  isActive: boolean;
  slug?: string;
};

const MenuItem: React.FC<Props> = (props) => {
  const [url, setUrl] = useState('/');
  const history = useHistory();
  const dispatch = useDispatch();
  const clicked = useSelector((state: any) => state.clicked);
  const isPlaying = useSelector((state: any) => state.isPlaying);

  useEffect(() => {
    let link = '/';
    let parent = props.currItem.parent;
    let slug = props.currItem.slug;

    link = parent ? `${parent}/${slug}` : slug

    setUrl(`/${link}`);

    if (clicked && props.isActive) {
      dispatch(unClick());
      dispatch(savePlace(props.itemKey));
      if (slug !== 'player') {
        history.push(link);
      } else {
        dispatch(playMedia());
      }
    }
  }, [clicked, dispatch, history, props]);
  return (
    <Link className={`menu-item ${props.isActive ? 'active' : ''} ${props.slug === 'nowplaying' ? 'now-playing' : ''} ${isPlaying ? 'playing' : ''}`} to={{
      pathname: url,
      state: {
        currentItem: props.currItem
      }
    }}>{props.currItem.title}</Link>
  );
};
export default MenuItem;
