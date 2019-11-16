import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { sendTabName, sendTitleSearch, updateCurrentIndex, newHistory, switchBody } from '../actions/saveMarkdownActions';
import { getTabName, getHistoryArray, getTitleSearch } from '../selectors/saveMarkdownSelectors';

const SaveMarkdownContainer = () => {
  const tabName = useSelector(state => getTabName(state));
  const titleSearch = useSelector(state => getTitleSearch(state));
  const historyArray = useSelector(state => getHistoryArray(state));
  const dispatch = useDispatch();
  const handleAdd = (name, historyArray) => {
    let newName = name;
    if(historyArray.length > 0) {
      for(let i = 0; i < historyArray.length; i++) {
        if(name === historyArray[i].name) {
          newName = `${name}-copy`;
        }
      }
    }
    dispatch(updateCurrentIndex(historyArray.length));
    dispatch(switchBody('', historyArray.length));
    dispatch(newHistory(newName, ''));
    localStorage.setItem('history', JSON.stringify(historyArray));
  };
  const handleChange = ({ target }) => {
    if(target.name === 'add') dispatch(sendTabName(target.value));
    else dispatch(sendTitleSearch(target.value));
  };

  return (
    <SaveMarkdown
      handleAdd={handleAdd}
      handleChange={handleChange}
      tabName={tabName}
      titleSearch={titleSearch}
      historyArray={historyArray}
    />
  );
};


export default SaveMarkdownContainer;


