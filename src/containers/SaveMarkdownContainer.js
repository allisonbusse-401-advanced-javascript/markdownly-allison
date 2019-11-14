import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SaveMarkdown from '../components/markdown/SaveMarkdown';

import { addTab, sendTabName } from '../actions/saveMarkdownActions';
import { updateCurrentTab } from '../actions/tabActions';
import { getTabName, getHistoryArray } from '../selectors/saveMarkdownSelectors';

import { newHistory } from '../actions/saveMarkdownActions';

const SaveMarkdownContainer = ({ handleAdd, handleChange, tabName, historyArray }) => {
  return (
    <SaveMarkdown 
      handleAdd={handleAdd} 
      handleChange={handleChange} 
      tabName={tabName} 
      historyArray={historyArray}
    />
  );
};

SaveMarkdownContainer.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired,
  historyArray: PropTypes.array.isRequired
};



const mapStateToProps = (state) => ({
  tabName: getTabName(state),
  historyArray: getHistoryArray(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(sendTabName(target.value));
  },
  handleAdd(name, historyArray) {
    let newName = name;
    if(historyArray.length > 0) {
      for(let i = 0; i < historyArray.length; i++) {
        if(name === historyArray[i].name) {
          newName = `${name}-copy`; 
        }
      }
    }
    dispatch(newHistory(newName, ''));
    dispatch(addTab(newName));
    dispatch(updateCurrentTab(newName));
  }
});

const SaveMarkdownContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveMarkdownContainer);

export default SaveMarkdownContainerContainer;


