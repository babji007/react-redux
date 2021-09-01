import ActionTypes from '../actions'
const initialState = {
  count: 0
  }
  

export default function brokenReducer(state = initialState, action) {
    switch(action.type) {
      case ActionTypes.INCREMENT:
        // NO! BAD: this is changing state!
        state.count++;
        return state;
  
      case 'DECREMENT':
        // NO! BAD: this is changing state too!
        state.count--;
        return state;
  
      default:
        // this is fine.
        return state;
    }
  }