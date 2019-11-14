import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { addTab, sendTabName } from '../actions/saveMarkdownActions';
import { updateCurrentTab } from '../actions/tabActions';
import { getTabName } from '../selectors/saveMarkdownSelectors';
import { getTabNames } from '../selectors/tabSelectors';

import { newHistory } from '../actions/saveMarkdownActions';

const SaveMarkdownContainer = ({ handleAdd, handleChange, tabName, tabNames }) => {
  return (
    <SaveMarkdown 
      handleAdd={handleAdd} 
      handleChange={handleChange} 
      tabName={tabName} 
      tabNames={tabNames}
    />
  );
};

SaveMarkdownContainer.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired,
  tabNames: PropTypes.array.isRequired
};



const mapStateToProps = (state) => ({
  tabName: getTabName(state),
  tabNames: getTabNames(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(sendTabName(target.value));
  },
  handleAdd(name, tabNames) {
    if(tabNames.includes(name)) name = `${name}-copy`;
    dispatch(newHistory(name, ''));
    dispatch(addTab(name));
    dispatch(updateCurrentTab(name));
  }
});

const SaveMarkdownContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveMarkdownContainer);

export default SaveMarkdownContainerContainer;


