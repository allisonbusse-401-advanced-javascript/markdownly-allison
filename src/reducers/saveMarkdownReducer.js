import { TAB_NAME_CHANGE } from '../actions/saveMarkdownActions';

const initialState = {
  tabName: ''
};

function documentReducer(state = initialState, action) {
  switch(action.type) {
    case TAB_NAME_CHANGE:
      return { ...state, tabName: action.payload };
    default:
      return state;
  }
}

export default documentReducer;
