import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tabs = ({ currentTab, currentBody, historyArray, tabNames, selectTab, handleDelete, handleSave }) => {
  const mappedTabs = tabNames.map((tabName, index)=> {
    return <div key={index} onClick={() => selectTab(tabName, historyArray)}>
      <p>{tabName}</p>
      <sup><button onClick={() => handleDelete(tabName)}>X</button></sup> 
    </div>;
  });

  return (
    <>
      <button onClick={()=> handleSave(currentTab, currentBody)}>Save Document</button>
      <ul className={styles.Tabs}>
        {mappedTabs}
      </ul>
    </>
  );
};

Tabs.propTypes = {
  handleDelete: PropTypes.func,
  currentBody: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  selectTab: PropTypes.func,
  handleSave: PropTypes.func,
  historyArray: PropTypes.array,
  tabNames: PropTypes.array.isRequired
};

export default Tabs;
