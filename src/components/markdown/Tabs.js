import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

const Tabs = ({ arrayTabs, handleTab, handleDelete }) => {
  const mappedTabs = arrayTabs.map((tab, index)=> {
    return <div key={index} onClick={() => handleTab(tab)}>
      <p>{tab}</p>
      <sup><button onClick={() => handleDelete(tab)}>X</button></sup> 
    </div>;
  });

  return (
    <ul className={styles.Tabs}>
      {mappedTabs}
    </ul>
  );
};

Tabs.propTypes = {
  handleDelete: PropTypes.func,
  handleTab: PropTypes.func,
  arrayTabs: PropTypes.array.isRequired
};

export default Tabs;
