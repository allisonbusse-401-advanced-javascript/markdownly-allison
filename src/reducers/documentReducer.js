import { MARKDOWN_UPDATE } from '../actions/documentActions';
import { UPDATE_CURRENT_TAB } from '../actions/tabActions';

const documentState = {
  currentTab: '',
  currentBody: '',
};

function documentReducer(state = documentState, action) {
  switch(action.type) {
    case MARKDOWN_UPDATE:
      return { ...state, currentBody: action.payload };
    case UPDATE_CURRENT_TAB:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
}

export default documentReducer;
