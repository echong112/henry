import React, { useEffect } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Link, useHistory} from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import { unClick } from '../actions';

interface Props {
  title: string;
  slug: string;
  isActive: boolean;
};

const MenuItem: React.FC<Props> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const clicked = useSelector((state: any) => state.clicked);

  useEffect(() => {
    if (clicked && props.isActive) {
      dispatch(unClick());
      history.push("/experience");
    }
  }, [props, history, dispatch, clicked]);
  
  return (
    <Link className={`menu-item ${props.isActive ? 'active' : ''}`}
      to={`/${'experience'}/${props.slug}`}>{props.title}
    </Link>
  );
};
export default MenuItem;
