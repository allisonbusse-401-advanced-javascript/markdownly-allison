import { GO_TO_TAB } from '../actions/tabActions';

const initialState = ['test'];

function tabReducer(state = initialState, action) {
  switch(action.type) {
    case GO_TO_TAB:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default tabReducer;
