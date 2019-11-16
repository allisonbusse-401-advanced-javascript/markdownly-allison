import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

import { updateHistory } from '../actions/saveMarkdownActions';

import { getCurrentIndex, getHistoryArray } from '../selectors/saveMarkdownSelectors';

const Document = () => {
  const historyArray = useSelector(state => getHistoryArray(state));
  const currentIndex = useSelector(state => getCurrentIndex(state));
  const dispatch = useDispatch();
  const updateMarkdown = ({ target }) => dispatch(updateHistory(target.value));

  let currentBody = '';
  if(historyArray[currentIndex]) currentBody = historyArray[currentIndex].body;

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(historyArray));
  });
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={currentBody} updateMarkdown={updateMarkdown}/>
        <Preview markdown={currentBody} />
      </div>
    </>
  );
};

export default Document;



