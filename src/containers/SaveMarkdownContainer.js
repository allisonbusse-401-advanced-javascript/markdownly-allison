import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { addTab, sendTabName } from '../actions/saveMarkdownActions';
import { getTabName } from '../selectors/saveMarkdownSelectors';

const SaveMarkdownContainer = ({ handleAdd, handleChange, tabName }) => {
  return (
    <SaveMarkdown handleAdd={handleAdd} handleChange={handleChange} tabName={tabName} />
  );
};

SaveMarkdownContainer.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired
}


const mapStateToProps = (state) => ({
  tabName: getTabName(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(sendTabName(target.value));
  },
  handleAdd(name) {
    dispatch(addTab(name));
  }
});

const DocumentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

export default DocumentContainer;


