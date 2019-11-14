import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tabs = ({ currentTab, currentBody, historyArray, selectTab, handleDelete, handleSave }) => {
  const mappedTabs = historyArray.map(({ name }, index)=> {
    return <div key={index} onClick={() => selectTab(name, historyArray)}>
      <p>{name}</p>
      <sup><button onClick={() => handleDelete(name)}>X</button></sup> 
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
};

export default Tabs;
