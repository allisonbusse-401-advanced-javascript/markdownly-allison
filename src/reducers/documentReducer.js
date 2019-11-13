import { MARKDOWN_UPDATE } from '../actions/documentActions';
import { GO_TO_TAB } from '../actions/tabActions';

const documentState = {
  saveMarkdown: [],
  currentTab: '',
  currentBody: '',
};

function documentReducer(state = documentState, action) {
  switch(action.type) {
    case MARKDOWN_UPDATE:
      return { ...state, currentBody: action.payload };
    case GO_TO_TAB:
      return {};
    default:
      return state;
  }
}

export default documentReducer;
