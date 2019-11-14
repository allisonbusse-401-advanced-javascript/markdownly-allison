import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tabs from '../components/markdown/Tabs';
import { getCurrentTab, getCurrentBody } from '../selectors/documentSelectors';
import { updateCurrentTab } from '../actions/tabActions';
import { switchBody } from '../actions/documentActions';
import { getHistoryArray } from '../selectors/saveMarkdownSelectors';
import { updateHistory } from '../actions/saveMarkdownActions';

const TabsNav = ({ historyArray, currentTab, currentBody, selectTab, handleSave }) => {
  
  return (
    <>
      <Tabs 
        handleSave={handleSave}
        currentTab={currentTab} 
        historyArray={historyArray} 
        currentBody={currentBody} 
        selectTab={selectTab} />
    </>
  );
};

TabsNav.propTypes = {
  historyArray: PropTypes.array,
  currentBody: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  handleDelete: PropTypes.func,
  handleSave: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentTab: getCurrentTab(state),
  currentBody: getCurrentBody(state),
  historyArray: getHistoryArray(state)
});

const mapDispatchToProps = dispatch => ({
  handleSave(oldTab, body) {
    dispatch(updateHistory(oldTab, body));
  },
  selectTab(newTab, historyArray) {
    dispatch(updateCurrentTab(newTab));
    for(let i = 0; i < historyArray.length; i++) {
      if(historyArray[i].name === newTab) {
        dispatch(switchBody(historyArray[i].body));
        return;
      }
    }
  },
  // handleDelete(name) {
  //   const { tabNames, historyArray } = deleteFunctionality(name);
  //   dispatch(updateTabNames(tabNames));
  //   dispatch(updateHistory(historyArray));
  // }
});

// function deleteFunctionality(name, state) {
//   const tabNames = getTabNames(state);
  
// }

const TabsNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsNav);

export default TabsNavContainer;
