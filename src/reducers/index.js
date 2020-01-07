import { combineReducers } from 'redux';

const activeIndex = (state = 0, action) => {
  switch(action.type) {
    case 'IS_UP':
      return action.activeIndex;
    case 'IS_DOWN':
      return action.activeIndex;
    case 'SET_MAX':
      return action.activeIndex;
    default:
      return state;
  }
};

const clicked = (state = false, action) => {
  switch(action.type) {
    case 'CLICKED_WHEEL':
      return action.clicked;
    case 'UNCLICKED':
      return action.clicked;
    default:
      return state;
  }
};

export default combineReducers({
  activeIndex,
  clicked
});
