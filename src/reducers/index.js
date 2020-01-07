import { combineReducers } from 'redux'

const activeIndex = (state = 0, action) => {
  switch(action.type) {
    case 'IS_UP':
      return action.activeIndex;
    case 'IS_DOWN': 
      return action.activeIndex;
    default: 
      return state;
  }
}

export default combineReducers({
  activeIndex
})
