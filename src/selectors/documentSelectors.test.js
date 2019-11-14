import { getCurrentTab, getCurrentBody } from './documentSelectors';

describe('document selectors', ()=> {
  const state = {
    document: {
      currentTab: 'dog',
      currentBody: 'cat'
    }
  };
  it('getCurrentTab gets the right state', ()=> {
    expect(getCurrentTab(state)).toEqual('dog');
  });
  it('getCurrentBody gets the right state', ()=> {
    expect(getCurrentBody(state)).toEqual('cat');
  });
});
