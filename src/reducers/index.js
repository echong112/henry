import { combineReducers } from 'redux'

const isUp = (state = false, action) => {
  switch(action.type) {
    case 'IS_UP':
      return action.isUp;
    case 'IS_DOWN': 
      return action.isUp;
    default: 
      return state;
  }
}

export default combineReducers({
  isUp
})
