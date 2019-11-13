import { MARKDOWN_UPDATE } from '../actions/documentActions';

const documentState = {
  markdown: '# Hi there'
};

function documentReducer(state = documentState, action) {
  switch(action.type) {
    case MARKDOWN_UPDATE:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}

export default documentReducer;
