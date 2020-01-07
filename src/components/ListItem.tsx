import React, { useEffect, useRef } from 'react';
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
  const dispatch = useDispatch();
  const clicked = useSelector((state: any) => state.clicked);
  const inputEl = useRef(null);

  let history = useHistory();

  useEffect(() => {
    const input = inputEl;
    if (clicked && props.isActive) {
      console.log(input);
      dispatch(unClick());
      history.push("/experience");
    }
  }, [props, clicked, dispatch, inputEl])
  
  return (
    <Link ref={inputEl} className={`menu-item ${props.isActive ? 'active' : ''}`}
      to={`/${'experience'}/${props.slug}`}>{props.title}
    </Link>
  );
};


export default MenuItem;
