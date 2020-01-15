import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { Link, useHistory} from "react-router-dom";
import VisibilitySensor from 'react-visibility-sensor';
import { useSelector, useDispatch} from 'react-redux';
import { unClick, savePlace } from '../actions';

interface Props {
  currItem: any;
  itemKey: number;
  isActive: boolean;
};

const MenuItem: React.FC<Props> = (props) => {
  const [url, setUrl] = useState('/');
  const [isVisible, setIsVisibile] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const clicked = useSelector((state: any) => state.clicked);

  useEffect(() => {
    let link = '/';
    let parent = props.currItem.parent;
    let slug = props.currItem.slug;

    link = parent ? `${parent}/${slug}` : slug

    setUrl(`/${link}`);

    if (clicked && props.isActive) {
      dispatch(unClick());
      dispatch(savePlace(props.itemKey));
      if (isVisible) {
        history.push(link);

      }
    }
  }, [props, history, dispatch, clicked]);

  const onChange = (isVisible: boolean) =>  setIsVisibile(isVisible);
  
  return (
    <VisibilitySensor onChange={onChange}>
      <Link className={`menu-item ${props.isActive ? 'active' : ''}`} to={{
        pathname: url,
        state: {
          currentItem: props.currItem
        }
      }}>{props.currItem.title}</Link>
    </VisibilitySensor>

  );
};
export default MenuItem;
