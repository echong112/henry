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

const isBack = (state = false, action) => {
  switch(action.type) {
    case 'IS_BACK':
      return action.isBack;
    default:
      return state;
  }
};

const title = (state = '', action) => {
  switch(action.type) {
    case 'TITLE_SET':
      return action.title;
    default:
      return state;
  }
}

const savedIndexes = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_INDEX':
      return action.savedIndexes;
    default:
      return state;
  }
}

const isPlaying = (state = false, action) => {

  switch(action.type) {
    case 'PLAY_MUSIC':
      return action.isPlaying;
    default:
      return state;
  }
}

const track = (state = 0, action) => {
  switch(action.type) {
    case 'NAVIGATE_TRACK':
      return action.track
    default:
      return state;
  }
}
const activeTrack = (state = 0, action) => {
  switch(action.type) {
    case 'ACTIVE_TRACK':
      return action.activeTrack
    default:
      return state;
  }
}

export default combineReducers({
  activeIndex,
  clicked,
  menuClicked,
  isBack,
  title,
  savedIndexes,
  isPlaying,
  track,
  activeTrack
});
