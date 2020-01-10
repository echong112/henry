import { combineReducers } from 'redux';

const activeIndex = (state = 0, action) => {
  switch(action.type) {
    case 'SCROLLED':
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

const menuClicked = (state = false, action) => {
  switch(action.type) {
    case 'MENU_BUTTON_CLICKED':
      return action.menuClicked;
    case 'MENU_BUTTON_UNCLICKED':
      return action.menuClicked;
    default:
      return state;
  }
};

export default combineReducers({
  activeIndex,
  clicked,
  menuClicked
});
