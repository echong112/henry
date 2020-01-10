import React from 'react';
import { useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clickWheel, scrollUp, scrollDown } from '../actions';
const Wheel: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="controls">
      <div className="wheel" onWheel={(event: any) => dispatch(event.nativeEvent.wheelDelta > 0 ? scrollUp() : scrollDown())}>
        <div className="clicker" onClick={(e: any) => dispatch(clickWheel())}></div>
        <div className='square'>
          <svg viewBox='0 0 100 100'>
            <a onClick={() => history.goBack()}>
              <polygon points='0,0 50,50 95,0' />
            </a>
            <polygon points='0,0 50,50 0,95' />
            <polygon points='5,100 50,50 95,100' />
            <polygon points='100,5 50,50 100,95' />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
