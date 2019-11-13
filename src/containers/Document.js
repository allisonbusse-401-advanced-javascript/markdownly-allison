import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';

import { sendMarkdownUpdate } from '../actions/documentActions';
import { getMarkdown } from '../selectors/documentSelectors';

const Document = ({ markdown, updateMarkdown }) => {
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
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  markdown: getMarkdown(state)
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



