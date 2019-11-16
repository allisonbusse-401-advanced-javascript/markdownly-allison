export const TAB_NAME_CHANGE = 'TAB_NAME_CHANGE';

export const sendTabName = tabName => ({
  type: TAB_NAME_CHANGE,
  payload: tabName
});

export const TITLE_SEARCH_CHANGE = 'TITLE_SEARCH_CHANGE';

export const sendTitleSearch = titleSearch => ({
  type: TITLE_SEARCH_CHANGE,
  payload: titleSearch
});

export const NEW_HISTORY = 'NEW_HISTORY';

export const newHistory = (name, body) => ({
  type: NEW_HISTORY,
  payload: [name, body]
});

export const UPDATE_HISTORY = 'UPDATE_HISTORY';

export const updateHistory = body => ({
  type: UPDATE_HISTORY,
  payload: body
});

export const UPDATE_CURRENT_INDEX = 'UPDATE_CURRENT_INDEX';

export const updateCurrentIndex = index => ({
  type: UPDATE_CURRENT_INDEX,
  payload: index
});

export const DELETE = 'DELETE';

export const deleteFile = index => ({
  type: DELETE,
  payload: index
});

export const manageStorage = () => {
  if(!JSON.parse(localStorage.getItem('history'))) {
    return [];
  }
  return JSON.parse(localStorage.getItem('history'));
};

export const SWITCH_BODY = 'SWITCH_BODY';

export const switchBody = (body, index)=> ({
  type: SWITCH_BODY,
  payload: body,
  index: index
});



