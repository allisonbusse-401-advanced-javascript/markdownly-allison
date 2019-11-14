import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

import { sendMarkdownUpdate } from '../actions/documentActions';
import { getCurrentTab } from '../selectors/documentSelectors';

const Document = ({ historyArray, currentTab, updateMarkdown }) => {
  //if history has current tab return body
  //else set current tab body to '' and return
  //update
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};

Document.propTypes = {
  currentTab: PropTypes.string.isRequired,
  historyArray: PropTypes.array,
  updateMarkdown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentTab: getCurrentTab(state),
  historyArray: getHistoryArray(state),
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(sendMarkdownUpdate(target.value));
  }
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;



