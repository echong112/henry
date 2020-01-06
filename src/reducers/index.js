import { combineReducers } from 'redux'

const isUp = (isUp = true, action) => {
  console.log(action);
  switch(action.type) {
    case 'IS_UP':
      return action.isUp;
    case 'IS_DOWN': 
      return action.isUp;
    default: 
      return isUp;
  }
}

export default combineReducers({
  isUp
})
