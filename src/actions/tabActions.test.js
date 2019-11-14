import { UPDATE_CURRENT_TAB, updateCurrentTab } from './tabActions';

describe('tab actions', ()=> {
  it('UPDATE_CURRENT_TAB returns what is expected', ()=> {
    expect(UPDATE_CURRENT_TAB).toEqual('UPDATE_CURRENT_TAB');
  });
  it('updateCurrentTab returns expected', ()=> {
    expect(updateCurrentTab('dog')).toEqual({ type: 'UPDATE_CURRENT_TAB', payload: 'dog' });
  });
})