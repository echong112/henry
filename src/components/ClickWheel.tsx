import React from 'react';
import { useDispatch } from 'react-redux';
import { clickWheel, scrollUp, scrollDown, clickMenuButton } from '../actions';
const Wheel: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="controls">
      <div className="wheel" onWheel={
        // clean this up by making it single variable. single action with param
        (e: any) => dispatch(e.nativeEvent.wheelDelta > 0 ? scrollUp() : scrollDown())
      }>
        <div className="clicker" onClick={() => dispatch(clickWheel())}></div>
        <div className='square'>
          <svg viewBox='0 0 100 100'>
            <polygon onClick={() => dispatch(clickMenuButton())} points='5,5 50,50 95,5' />
            <polygon onClick={() => dispatch(clickMenuButton())} points='5,5 50,50 95,5' />
            <polygon onClick={() => dispatch(clickMenuButton())} points='5,5 50,50 95,5' />
            <polygon onClick={() => dispatch(clickMenuButton())} points='5,5 50,50 95,5' />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Wheel;
