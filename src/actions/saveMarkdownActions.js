export const TAB_NAME_CHANGE = 'TAB_NAME_CHANGE';

export const sendTabName = tabName => ({
  type: TAB_NAME_CHANGE,
  payload: tabName
});

export const ADD_TAB = 'ADD_TAB';

export const addTab = name => ({
  type: ADD_TAB,
  payload: name
});

