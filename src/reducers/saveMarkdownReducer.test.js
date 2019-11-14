import saveMarkdownReducer from './saveMarkdownReducer';

import { TAB_NAME_CHANGE, UPDATE_HISTORY, NEW_HISTORY, UPDATE_CURRENT_INDEX } from '../actions/saveMarkdownActions';

describe('saveMarkdown reducer', ()=> {
  const state = {
    tabName: '',
    history: [],
    currentIndex: 0,
  };

  it('Correctly deals with TAB_NAME_CHANGE case', ()=> {
    expect(saveMarkdownReducer(state, { type: TAB_NAME_CHANGE, payload: 'dog' })).toEqual({ ...state, tabName: 'dog' });
  });
  it('Correctly deals with UPDATE_HISTORY case', ()=> {
    expect(saveMarkdownReducer(state, { type: UPDATE_HISTORY, payload: 'dog' })).toEqual({ ...state, history: [{ cat: 'dog' }] });
  });
  it('Correctly deals with NEW_HISTORY case', ()=> {
    expect(saveMarkdownReducer(state, { type: NEW_HISTORY, payload: ['cat', 'dog'] })).toEqual({ ...state, history: [{ cat: 'dog' }] });
  });
  it('Correctly deals with UPDATE_CURRENT_INDEX case', ()=> {
    expect(saveMarkdownReducer(state, { type: UPDATE_CURRENT_INDEX, payload: ['cat', 'dog'] })).toEqual({ ...state, history: [{ cat: 'dog' }] });
  });
  it('correctly deals with default case', () => {
    expect(saveMarkdownReducer(state, { type: 'default'})).toEqual(...state);
  });
});
