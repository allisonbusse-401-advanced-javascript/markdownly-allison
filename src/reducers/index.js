import { combineReducers } from 'redux';
import document from './documentReducer';
import saveMarkdown from './saveMarkdownReducer';

const reducer = combineReducers({
  document,
  saveMarkdown
});

export default reducer;
