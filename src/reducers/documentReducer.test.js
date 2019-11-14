import documentReducer from './documentReducer';

import { MARKDOWN_UPDATE, SWITCH_BODY } from '../actions/documentActions';
import { UPDATE_CURRENT_TAB } from '../actions/tabActions';
import { ADD_TAB } from '../actions/saveMarkdownActions';

describe('document reducer', ()=> {
  const documentState = {
    currentTab: '',
    currentBody: '',
  };

  it('Correctly deals with MARKDOWN_UPDATE case', ()=> {
    expect(documentReducer(documentState, { type: MARKDOWN_UPDATE, payload: 'dog' })).toEqual({ ...documentState, currentBody: 'dog' });
  });
  it('Correctly deals with SWITCH_BODY case', ()=> {
    expect(documentReducer(documentState, { type: SWITCH_BODY, payload: 'dog' })).toEqual({ ...documentState, currentBody: 'dog' });
  });
  it('Correctly deals with ADD_TAB case', ()=> {
    expect(documentReducer(documentState, { type: ADD_TAB, payload: 'dog' })).toEqual({ currentTab: 'dog', currentBody: '' });
  });
  it('Correctly deals with UPDATE_CURRENT_TAB case', ()=> {
    expect(documentReducer(documentState, { type: UPDATE_CURRENT_TAB, payload: 'dog' })).toEqual({ ...documentState, currentTab: 'dog' });
  });

});
