import { MARKDOWN_UPDATE, SWITCH_BODY } from '../actions/documentActions';
import { UPDATE_CURRENT_TAB } from '../actions/tabActions';
import { ADD_TAB } from '../actions/saveMarkdownActions';

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
    case ADD_TAB:
      return { currentTab: action.payload, currentBody: '' };
    case SWITCH_BODY:

      return { ...state, currentBody: action.payload };
    default:
      return state;
  }
}

export default documentReducer;
