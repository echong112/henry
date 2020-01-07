import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link, useHistory} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { unClick } from '../actions';

interface Props {
  currItem: any;
  isActive: boolean;
};

const MenuItem: React.FC<Props> = (props) => {
  const [url, setUrl] = useState('/');
  const history = useHistory();
  const dispatch = useDispatch();
  const clicked = useSelector((state: any) => state.clicked);

  useEffect(() => {

    let link = '/';
    let parent = props.currItem.parent;
    let slug = props.currItem.slug;

    if (parent) {
      link = `${parent}/${slug}`
    } else {
      link = slug
    }
    setUrl(`/${link}`);
    if (clicked && props.isActive) {
      dispatch(unClick());
      history.push(link);
    }
  }, [props, history, dispatch, clicked]);
  
  return (
    <Link className={`menu-item ${props.isActive ? 'active' : ''}`}
      to={url}>{props.currItem.title}
    </Link>
  );
};
export default MenuItem;
